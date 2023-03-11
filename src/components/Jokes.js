import React, { useState, useEffect } from "react";
import "./Jokes.css";

const Jokes = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [isLoading, setLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);
    setLoading(false);
  }
  return (
    <section className="App">
      <div className="Container">
        <h1>😄Joke Generator😄</h1>
        <h2>Don't Try to Control🤐 Your Laugh😄😂</h2>
        <div className="joke-container">
          {isLoading ? (
            <h3>Loading... To J😄ke</h3>
          ) : (
            <p className="myjoke">{joke.value.substring(0, 70)}</p>
          )}
        </div>
        <button onClick={getJoke} class="button" role="button">
          😄You Want More Laugh😂
        </button>
        <p className="footer">©Designed by Raviraj Bujawade</p>
      </div>
    </section>
  );
};

export default Jokes;
