import React from 'react';
import SearchBar from './SearchBar';
import YouTubeApi from '../apis/YouTubeApi';
import VideoList from "./VideoList";

const KEY = 'AIzaSyCNrDwGhidTCoNfIiIbDVf2QERpq5WC3IE';
class App extends React.Component {
    state={videos:[]}
  onTermSubmit = async term => {
    const response=await YouTubeApi.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });


    this.setState({ videos: response.data.items})
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
