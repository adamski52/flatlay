import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import AppHandler from "./handlers/AppHandler";

import "./index.css";

import App from "./components/App";

Array.prototype.shuffle = function(useDefault) {
    return this.map((a) => {
        return [useDefault ? Math.random() : Math.seededRandom(), a];
    }).sort((a, b) => {
        return a[0] - b[0];
    }).map((a) => {
        return a[1];
    });
};

Math.setSeed = function(seed) {
    Math.seed = parseInt(seed.toUpperCase(), 36);
};

Math.seededRandom = function() {
    let x = Math.sin(Math.seed++) * 10000;
    return x - Math.floor(x);
};

let store = createStore(AppHandler.reducer,
    applyMiddleware(
        thunkMiddleware,
        // createLogger()
    ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
