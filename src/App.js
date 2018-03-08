import React from 'react';
//import {Router, Route, hashHistory} from 'react-router';
import {HashRouter,Route,Link} from 'react-router-dom';
const Home = () => (<div><h1>Hello World</h1></div>)
export class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <Route path="/" component={Home} />
            </HashRouter>
        )
    }
}

export default App;