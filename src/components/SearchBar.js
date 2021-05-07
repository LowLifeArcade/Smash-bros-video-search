import React from 'react';
import { useState } from 'react';

function handleChange(setState, state) {
  return (e) => setState({ ...state, term: e.target.value });
}


const SearchBar = (props) => {
  const [state, setState] = useState({ term: '' });
  const {term} = state

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(`smash bros ${term}`)
  };
  return (
    <div className="search-bar ui segment pt-2">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="Video">SMASH Search</label>
          <input
            type="text"
            value={state.term}
            onChange={handleChange(setState, state)} // i didn't know i could pass state between functions out of scope
            className="text"
          />
          {console.log(state)}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
