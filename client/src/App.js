import "./App.css";
import FullList from "./components/FullList";
import SingleList from "./components/SingleList";
import NavBar from "./components/NavBar";
import { useState} from "react";
import { Route, Switch} from "react-router-dom";

function App() {
  // map center constant
  const [center, useCenter] = useState([44.47456445, -73.2128915592665]);
  return (
    // page container
    <div>
      {/* navbar function */}
      <NavBar />
      <Switch>
        {/* all resturants page */}
        <Route exact path="/" render={() => <FullList center={center} />} />
        {/* single resturant page */}
        <SingleList center={center} />
      </Switch>
    </div>
  );
}

export default App;
