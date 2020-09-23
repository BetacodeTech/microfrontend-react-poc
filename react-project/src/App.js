import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {store} from "./store";
import {Messages} from "./components/Messages";

function App() {


    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Messages/>
                </header>
            </div>
        </Provider>
    );
}

export default App;
