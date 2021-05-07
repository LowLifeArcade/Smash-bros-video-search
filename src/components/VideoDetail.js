import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} frameBorder="0"></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <p>{video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetail;
