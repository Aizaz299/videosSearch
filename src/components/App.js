import React from 'react';
import SearchBar from './SearchBar';
import YouTubeApi from '../apis/YouTubeApi';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = 'AIzaSyCNrDwGhidTCoNfIiIbDVf2QERpq5WC3IE';
class App extends React.Component {
    state={videos:[], selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('Aizaz Saeed')
    }

  onTermSubmit = async term => {
    const response=await YouTubeApi.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        key: KEY,
      }
    });


    this.setState({ 
        videos: response.data.items
        , selectedVideo:response.data.items[0]
    })
  };
  onVideoSelect = (video) =>{
    console.log("From the app!!!", video);
    this.setState({selectedVideo:video});
  }




  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos.
        <div className="ui grid">
        <div className="ui row"> 
        <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="five wide column">
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
