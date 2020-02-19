import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyDatesScreen from "./screens/MyDatesScreen";
import MatchmakerScreen from "./screens/MatchmakerScreen";
import { getUser } from "./api";

export default function App() {
  const [user, setUser] = useState({
    name: "Aaron",
    age: 28,
    points: 75,
    image_url: "https://avatars0.githubusercontent.com/u/24718190?s=460&v=4",
    gender: "Male",
    looking_for: ["Female"],
    city: "Montreal",
    bio:
      "HEY whats up yall? ggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhh ggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhh ggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhh ggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhh"
  });

  // useEffect(() => {
  //   getUser(2).then(res => {
  //     console.log(res.data)
  //     setUser(res.data);
  //   });
  // }, []);

  return (
    <Router>
      <Nav user={user} />
      <Switch>
        <Route path="/profile">
          <ProfileScreen user={user} />
        </Route>
        <Route path="/dates">
          <MyDatesScreen user={user} />
        </Route>
        <Route path="/matchmaker">
          <MatchmakerScreen user={user} />
        </Route>
        <Route path="/chat">
          <ChatScreen user={user} />
        </Route>
      </Switch>
    </Router>
  );
}
