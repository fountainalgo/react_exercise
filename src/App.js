import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import TimeForm from './TimeForm';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          currentTime:null,msg:'now'
        }
    }
    fetchCurrentTime(){};
    getApiUrl(){};
    handleFormSubmit(){};
    handleChange(){};
    render(){
        const {currentTime,tz} = this.state;
        const apiUrl = this.getApiUrl();
        return (
          <div>
              {!currentTime && 
                <button onClick={this.fetchCurrentTime.bind(this)}>
                  Get the current Time.
                </button>
              }
            {currentTime && <div>The current time is: {currentTime}</div>}
            <TimeForm
              OnFormSubmit={this.handleFormSubmit.bind(this)}
              OnFormChange={this.handleChange.bind(this)}
              tz={tz}
              msg={'now'}
            />
            <p>We'll be making a request from :<code>{apiUrl}</code></p>
          </div>
        )
    }
}






/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

export default App;
