import { scorePlayer1, scorePlayer2, resetGame, togglePause } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function Tennis() {
    const score1 = useSelector((state) => state.score1);
    const score2 = useSelector((state) => state.score2);
    const pause = useSelector((state) => state.pause);

    const dispatch = useDispatch();
    return(
        <div className="tennis-container">
            <div className="tennis-card">
                <div className="score">
                    <p>le Score est: <span className="joueur1-score">{ score1 }</span> : <span className="joueur2-score">{ score2 }</span></p>
                </div>
                <div className="c">
                    <button className="joueur1-btn" onClick={() => dispatch(scorePlayer1())}>Point Joueur 1</button>
                    <button className="joueur2-btn" onClick={() => dispatch(scorePlayer2())}>Point Joueur 2</button>
                    <button className="reinitialiser-btn" onClick={() => dispatch(resetGame())}>Remettre a zero</button>
                    <button className={`pause-btn ${pause ? 'paused' : ''}`} onClick={() => dispatch(togglePause())}>Pause / Reprendre</button>
                </div>
            </div>
        </div>
    );
}