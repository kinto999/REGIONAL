import { addscoretop1, addscoretop2, reset, toggle } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Tennis() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return(
        <div className="tennis-container">
            <div className="tennis-card">
                <div className="score">
                    <p>le Score est: <span className="player1-score">{state.p1}</span> : <span className="player2-score">{state.p2}</span></p>
                </div>
                <div className="controllers">
                    <button className="player1-btn" onClick={() => dispatch(addscoretop1())}>Point Joueur 1</button>
                    <button className="player2-btn" onClick={() => dispatch(addscoretop2())}>Point Joueur 2</button>
                    <button className="reset-btn" onClick={() => dispatch(reset())}>Remettre a zero</button>
                    <button className={`pause-btn ${state.isPaused ? 'paused' : ''}`} onClick={() => dispatch(toggle())}>Pause / Reprendre</button>
                </div>
            </div>
        </div>
    )
}