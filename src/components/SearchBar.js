import React from 'react'

class SearchBar extends React.Component{
    state={userInput:''}

     onFormSubmit=(e)=>{
         e.prevent.default();
    }

    render() {
     
    return(
        <div className="ui action input segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="Video Search..."
            value={this.state.userInput} 
            onChange={e=>this.setState({userInput:e.target.value})}
            
            />
            </form>
            <button className="ui icon button">
                
                <i className="search icon"></i>
            </button>
            
        </div>
    )
    }
}

export default SearchBar;

