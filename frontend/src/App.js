import React, { useState } from "react";
import Nav from "./components/Nav";
import ProfileSidebar from "./components/ProfileSidebar";
import Profile from "./components/Profile";
import MyDates from "./components/MyDates";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [user, setUser] = useState({ name: "Aaron" });

  return (
    <Router>
      <Nav user={user} />
      <main>
        <Switch>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
        </Switch>
      </main>
      {user && (
        <aside>
          <Switch>
            <Route path="/profile">
              <ProfileSidebar user={user} />
            </Route>
          </Switch>
        </aside>
      )}
      <main>
        <Switch>
          <Route path="/dates">
            <MyDates user={user}></MyDates>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
