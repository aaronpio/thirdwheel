import socketIOClient from "socket.io-client";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyDatesScreen from "./screens/MyDatesScreen";
import MyMatchesScreen from "./screens/MatchesMadeScreen";
import MatchmakerScreen from "./screens/MatchmakerScreen";
import { getUser } from "./api";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav user={user} />
      <Switch>
        <Route path="/login">
          <LoginScreen setUser={setUser}/>
        </Route>
        <Route path="/profile">
          <ProfileScreen user={user} />
        </Route>
        <Route path="/dates">
          <MyDatesScreen user={user} />
        </Route>
        <Route path="/matches">
          <MyMatchesScreen user={user} />
        </Route>
        <Route path="/matchmaker">
          <MatchmakerScreen user={user} />
        </Route>
        <Route path="/chat">
          <ChatScreen user={user} socket={socketIOClient("localhost:3002")} />
        </Route>
      </Switch>
    </Router>
  );
}
