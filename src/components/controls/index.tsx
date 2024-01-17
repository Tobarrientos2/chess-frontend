import React from "react";
import GameSession from "../../lib/session";
import "./controls.scss";

type Props = {
  game: GameSession;
};

function Controls({ game }: Props): JSX.Element {
  return (
    <div className="controls" data-testid="controls">
      //Reset Button
      <button
        onClick={() => {
          game.reset();
        }}
      >
        reset
      </button>
      //Button for undo
      <button
        onClick={() => {
          game.undo();
        }}
      >
        {"<"}
      </button>
      //Button for redo
      <button
        onClick={() => {
          game.redo();
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default Controls;
