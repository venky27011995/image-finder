import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import Search from './components/search/Search'
import { ImageResults } from './components/image-results/ImageResults';
class App extends Component {
  
render() {
  return (
      <div>
      <NavBar title="PixaBay Image Finder" />
      <div className="container">
      <Search />
      </div>
      </div>

   );
}
 
}

export default App;
