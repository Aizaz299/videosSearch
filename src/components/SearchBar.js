import React from 'react';

class SearchBar extends React.Component {
  state = { userInput: '' };

//   onInputChange = event => {
//     this.setState({ userInput: event.target.value });
//   };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call
    // callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={e=>this.setState({userInput:e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
