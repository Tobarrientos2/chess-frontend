import React, { useEffect, useState } from "react";
import Board from "./components/board";
import Controls from "./components/controls";
import GameSession from "./lib/session";
import Time from "./components/time"
import Header from "./components/header";

function App() {
  const [game, setGame] = useState<GameSession>();

  useEffect(() => {
    setGame(new GameSession(true));
  }, []);

  return game ? (
    <div className="chess" id="container">
      <Header game={game} />
      <Time game={game} />
      <Board game={game} />
      <Controls game={game} />
    </div>
  ) : null;
}

export default App;
