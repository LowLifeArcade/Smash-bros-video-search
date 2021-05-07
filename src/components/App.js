import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('smash bros')
  }

  onFormSubmit = async (term) => {
    // callback to send to SearchBar
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log('APP', this.state);
  };

  render() {
    return (
      <div className="ui container">
        {' '}
        <SearchBar onFormSubmit={this.onFormSubmit} />{' '}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
