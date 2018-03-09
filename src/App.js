import React from 'react';
import {Index} from "./containers/Index";
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
//import {HashRouter,Route,Link} from 'react-router-dom';


export class App extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                    <Route path="/" component={Index}>
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                        <Route path="about" component={About} />
                    </Route>  
            </Router>
        )
    }
}

export default App;