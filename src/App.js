import React, { Component } from "react";
import "./App.css";
import { createStore} from 'redux';
import reducer from "./reducers";
import Card from './Card';


const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
};
const store = createStore (reducer, initialState );

class App extends Component {
  

  render() {
    return (
      <div>
        <Card description = {store.getState().description} likes= {store.getState().likes} name= {store.getState().name} location= {store.getState().location} />
      </div>
    );
  }
}

export default App;
