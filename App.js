import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Horror: [
    { name: "Tumbbad", rating: "8.3/10" },
    { name: "Stree", rating: "7.6/10" },
    { name: "Makdee", rating: "7.4/10" },
    { name: "Go Goa Gone", rating: "6.6/10" }
  ],
  Drama: [
    { name: "Anand", rating: "8.4/10" },
    { name: "3 Idiots", rating: "8.4/10" },
    { name: "Raanjhanaa", rating: "7.6/10" },
    { name: "Piku", rating: "7.6/10" },
    { name: "Kabhi Khushi Kabhie Gham", rating: "7.4/10" }
  ],

  Action: [
    {
      name: "Gangs of Wasseypur",
      rating: "8.4/10"
    },
    {
      name: "Dhoom",
      rating: "6.7/10"
    },
    {
      name: "Race",
      rating: "6.7/10"
    },
    {
      name: "Krrish",
      rating: "6.4/10"
    }
  ],
  Comedy: [
    {
      name: "Andaaz Apna Apna",
      rating: "8.2/10"
    },
    {
      name: "Chupke Chupke",
      rating: "8.3/10"
    },
    {
      name: "Hera Pheri",
      rating: "8.2/10"
    },
    {
      name: "All The Best",
      rating: "5.5/10"
    },
    { name: "Fukrey", rating: "6.5/10" }
  ],
  "Period Dramas": [
    { name: "Bajirao Mastani", rating: "7.2/10" },
    { name: "Lagaan", rating: "8.1/10" },
    { name: "Tanhaji: The Unsung Warrior", rating: "7.6/10" },
    { name: "Padmavat", rating: "7.0/10" }
  ],
  "Rom-Com": [
    { name: "Jab We Met", rating: "7.9/10" },
    { name: "Band Baaja Baaraat", rating: "7.2/10" },
    { name: "Tanu Weds Manu Returns", rating: "7.6/10" }
  ],
  "Coming of age": [
    { name: "Dil Chahta Hai", rating: "8.1/10" },
    { name: "Queen", rating: "8.2/10" },
    { name: "Zindagi Na Milegi Dobara", rating: "8.1/10" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎞️</span> Hindi movies<span role="img">🍿</span>
      </h1>
      <p style={{ fontSize: "" }}>
        {" "}
        My favourite hindi movies are listed below. Select a genre to get
        started.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#d5f56d",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr
        style={{
          backgroundColor: "#d5f56d",
          height: "0.11rem"
        }}
      />
      {/* <br/> */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #d5f56d",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
