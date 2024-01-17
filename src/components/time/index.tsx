import "./time.scss";
import GameSession from "../../lib/session";

type Props = {
   game: GameSession;
}; 

function Time ({ game }: Props): JSX.Element{  
return (
<div className="controls" data-testid="controls">
    Time
</div>
);
};
export default Time;