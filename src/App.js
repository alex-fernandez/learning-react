import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Profile from './containers/Profile'
import {NavHeader} from "./components/header/NavHeader";

class App extends Component {


    render() {

        return (
            <div>
                <NavHeader/>
                <Profile/>
            </div>
        );
    }
}

export default App;
