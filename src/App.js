import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
//Import and use components

import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />  
          <SearchBox />
          <UserProfile/>  
        </header>
        <Hero />
        <TitleList 
          title="Search Results" 
          movies={this.props.searchResults} />
        <TitleList 
          title="My Movies" 
          movies={this.props.myMovieList} />
      </div>
    );
  }
}

export default App;