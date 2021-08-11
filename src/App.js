import React from "react";
import Home from "./Home";
import Genre from "./Genre";
import ParentalGuide from "./ParentalGuide";
import Production from "./Production";
import Stars from "./Stars";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>

      <div className="root">
        <header className="header">
          <h1>Movie Generator</h1>
        </header>

        <Switch>
          <Route path="/genre"><Genre/></Route>
          <Route path="/parental-guide"><ParentalGuide/></Route>
          <Route path="/stars"><Stars/></Route>
          <Route path="/production"><Production/></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
