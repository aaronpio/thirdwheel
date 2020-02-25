import socketIOClient from "socket.io-client";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyDatesScreen from "./screens/MyDatesScreen";
import MatchesMadeScreen from "./screens/MatchesMadeScreen";
import MatchmakerScreen from "./screens/MatchmakerScreen";
import { getUser } from "./api";

export default function App() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(null);

  const setUserAndLocalStorage = user => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logoutAndDeleteLocalStorage = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location = "/";
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <Router>
      {!user ? (
        <Switch>
          <Route path="/">
            <LoginScreen setUserAndLocalStorage={setUserAndLocalStorage} />
          </Route>
        </Switch>
      ) : (
        <>
          <Nav user={user} />
          <Switch>
            <Route path="/profile">
              <ProfileScreen user={user} logout={logoutAndDeleteLocalStorage} />
            </Route>
            <Route path="/dates">
              <MyDatesScreen
                user={user}
                setDate={setDate}
                logout={logoutAndDeleteLocalStorage}
              />
            </Route>
            <Route path="/matches">
              <MatchesMadeScreen
                user={user}
                logout={logoutAndDeleteLocalStorage}
              />
            </Route>
            <Route path="/matchmaker">
              <MatchmakerScreen user={user} />
            </Route>
            <Route path="/chat">
              <ChatScreen
                user={user}
                date={date}
                socket={socketIOClient("localhost:3002")}
                setUser={setUser}
              />
            </Route>
            <Route path="/">
              <MatchmakerScreen user={user} />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}
