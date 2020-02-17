import React from "react";
import InteractiveDateCard from "./InteractiveDateCard";
import styles from "./MyDates.module.scss";
import { Link } from "react-router-dom";

const MyDates = () => {
  const users = [
    {
      name: "Aaron",
      age: 22,
      bio:
        "yoooooooooooooooooooooooooofff fffffffffffffffoooooooooooyo ggggggggggggggggggggggg coooooooooffffffffffffdddddddddddddddddddddooooool this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      image_url: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "jane",
      age: 24,
      bio: "hey this is my bio thanks for reading",
      image_url: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
      name: "John",
      age: 22,
      bio:
        "yo this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      image_url: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "Hermione",
      age: 22,
      bio:
        "yo this is my bio thanks for reading. yo this is my bio thanks for reading. yo this is my bio thanks for reading. ",
      image_url: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      name: "jane Goodall",
      age: 24,
      bio: "hey this is my bio thanks for reading",
      image_url: "https://randomuser.me/api/portraits/women/34.jpg"
    }
  ];

  const matchmakeeCardComponents = users.map((user, index) => (
    <InteractiveDateCard
      key={index} //use user.id later
      user={user}
    />
  ));

  return (
    <div className={styles.my_dates}>
      <h2>Your Dates</h2>
      <ul>{matchmakeeCardComponents}</ul>
    </div>
  );
};

export default MyDates;
