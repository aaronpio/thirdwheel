import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ProfileSidebar from "./components/ProfileSidebar";
import Profile from "./components/Profile";
import MyDates from "./components/MyDates";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { getUser } from "./api";

export default function App() {
  const [user, setUser] = useState({
    name: "Aaron",
    age: 28,
    points: 75,
    image_url: "https://avatars0.githubusercontent.com/u/24718190?s=460&v=4",
    gender: "Male",
    looking_for: ["Female"],
    city: "Montreal"
  });
  // useEffect(() => {
  //   getUser(1).then(_user => {console.log(_user);setUser(_user)})
  // }, [])

  return (
    <Router>
      <Nav user={user} />
      <main>
        <Switch>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/dates">
            <MyDates user={user} />
          </Route>
        </Switch>
      </main>
      {user && (
        <aside>
          <Switch>
            <Route path={["/dates", "/profile"]}>
              <ProfileSidebar user={user} />
            </Route>
          </Switch>
        </aside>
      )}
    </Router>
  );
}
