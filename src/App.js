import "./App.css";
import { Component } from "react";

import CardList from "./components/cardList";
// import PhotoCard from "./components/photoCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <CardList />
      </>
    );
  }
}

export default App;
