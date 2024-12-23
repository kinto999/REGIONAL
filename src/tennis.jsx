import { scorep1, scorep2, reinitialiser, pause_reprendre } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Tennis() {
    const state = useSelector((state) => state);
    const score_1 = useSelector((state) => state.s1);
    const score_2 = useSelector((state) => state.s2);

    const dispatch = useDispatch();
    return(
        <div className="tennis-container">
            <div className="tennis-card">
                <div className="score">
                    <p>le Score est: <span className="joueur1-score">{ score_1 }</span> : <span className="joueur2-score">{ score_2 }</span></p>
                </div>
                <div className="c">
                    <button className="joueur1-btn" onClick={() => dispatch(scorep1())}>Point Joueur 1</button>
                    <button className="joueur2-btn" onClick={() => dispatch(scorep2())}>Point Joueur 2</button>
                    <button className="reinitialiser-btn" onClick={() => dispatch(reset())}>Remettre a zero</button>
                    <button className={`pause-btn ${state.pauser ? 'pauser' : ''}`} onClick={() => dispatch(pause_reprendre())}>Pause / Reprendre</button>
                </div>
            </div>
        </div>
    )
}