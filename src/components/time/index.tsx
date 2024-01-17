import "./time.scss";
import { useState } from "react";
import GameSession from "../../lib/session";
import { GameSessionTimer } from "../../lib/types";
import { useInitialEffect } from "../../lib/utils";

type Props = {
   game: GameSession;
}; 

function Time ({ game }: Props): JSX.Element{  
    const [gameOver, setGameOver ] = useState<boolean>(game.isGameOver());
    const [time, setTime] = useState<GameSessionTimer>(game.timer);

    useInitialEffect (() => {
        game.onTimerChange((timer) => setTime(timer));
    });
return (
<div className="controls" data-testid="controls">
    Time
</div>


);
};
export default Time;