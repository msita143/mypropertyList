
import { useState } from "react";

import PropertyLists from "./components/propertyLists";
import SavedLists from "./components/savedLists";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.scss';

/*
  Main App component which show tabs and connect it to router.
*/
function App() {
  const [active, setActive] = useState("Property Listings");
  const toggleState = (e) => {
    setActive(e.target.innerText);
  }

  return (
    <div className="app-container">
      <BrowserRouter >
        <div className="links">
            <Link className={active === "Property Listings" ? "mylink activelink": "mylink inactivelink"} to="/listing" onClick={toggleState}>
              Property Listings
            </Link>
            <Link className={active === "Saved Listings" ? "mylink activelink": "mylink inactivelink"} to="/saved" onClick={toggleState}>
              Saved Listings
            </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/" component={PropertyLists} />
            <Route path="/listing" component={PropertyLists} />
            <Route path="/saved" component={SavedLists} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
