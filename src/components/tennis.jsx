import { addscoretop1, addscoretop2, reset, toggle } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Tennis() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return(
        <div className="tennis-container">
            <div className="tennis-card">
                <div className="score">
                    <p>le Score est: <span className="s1">{state.s1}</span> : <span className="s2">{state.s2}</span></p>
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