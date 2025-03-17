import React, { useState } from "react";

const App = () => {
  const games = ["Cricket", "Mobile games", "football", "Running race"];
  const [game, setGame] = useState(games[0]);

  const changeName = () => {
    const randomNumber = Math.floor(Math.random() * games.length);
    setGame(games[randomNumber]);
  };
  return (
    <div>
      <h1>I am good in {game}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default App;
