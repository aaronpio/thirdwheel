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

  const setUserAndLocalStorage = user => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Router>
      <Nav user={user} />
      {!user ? (
        <Switch>
          <LoginScreen setUserAndLocalStorage={setUserAndLocalStorage} />}
        </Switch>
      ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen user={user} setUser={setUser} />
          </Route>
          <Route path="/dates">
            <MyDatesScreen user={user} setUser={setUser} />
          </Route>
          <Route path="/matches">
            <MyMatchesScreen user={user} setUser={setUser} />
          </Route>
          <Route path="/matchmaker">
            <MatchmakerScreen user={user} />
          </Route>
          <Route path="/chat">
            <ChatScreen
              user={user}
              socket={socketIOClient("localhost:3002")}
              setUser={setUser}
            />
          </Route>
        </Switch>
      )}
    </Router>
  );
}
