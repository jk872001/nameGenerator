import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  state = {
    headtitle: "Name it !",
  };
  render() {
    return (
      <div >
        <Header headTitle={this.state.headtitle} />
        <SearchBox />
      </div>
    );
  }
}

export default App;
