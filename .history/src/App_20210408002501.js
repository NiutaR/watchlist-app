import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./components/Header/Header";
import { Watchlist } from "./components/Watch/Watchlist";
import { Watched } from "./components/Watch/";
import  Add  from "./components/Add/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
