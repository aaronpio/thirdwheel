import React from "react";
import MatchmakeeCard from "./MatchmakeeCard";
import "./MyDates.scss";
import { Link } from "react-router-dom";

const MyDates = () => {
  const users = [
    {
      name: "Aaron",
      age: 22,
      bio:
        "yooooooooooooooooooooooooooooooooooooooooooooooooyo this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      img: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "jane",
      age: 24,
      bio: "hey this is my bio thanks for reading",
      img: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
      name: "John",
      age: 22,
      bio:
        "yo this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      img: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "Hermione",
      age: 22,
      bio:
        "yo this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      img: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "jane Goodall",
      age: 24,
      bio: "hey this is my bio thanks for reading",
      img: "https://randomuser.me/api/portraits/women/34.jpg"
    }
  ];

  const matchmakeeCardComponents = users.map((user, index) => (
    <MatchmakeeCard
      key={index} //use user.id later
      name={user.name}
      age={user.age}
      bio={user.bio}
      img={user.img}
    />
  ));

  return (
    <div className="my_dates">
      <h2>Your Dates</h2>
      <ul>{matchmakeeCardComponents}</ul>
    </div>
  );
};

export default MyDates;
