import logo from "./logo.svg";
import "./App.css";
import FullList from "./components/FullList";
import SingleList from "./components/SingleList";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  const [center, useCenter] = useState([44.47456445,-73.2128915592665])
  return (
    <div>
      <NavBar/>
      
      <Switch>
        <Route exact path="/" render={() => <FullList center={center}/>}  />
      <SingleList center={center}/>
      </Switch>
    </div>
  );
}

export default App;
