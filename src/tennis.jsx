import { scorep1, scorep2, reinit, pr } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function Tennis() {
    const score_1 = useSelector((state) => state.s1);
    const score_2 = useSelector((state) => state.s2);
    const pauser = useSelector((state) => state.pauser);

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
                    <button className="reinitialiser-btn" onClick={() => dispatch(reinit())}>Remettre a zero</button>
                    <button className={`pause-btn ${pauser ? 'paused' : ''}`} onClick={() => dispatch(pr())}>Pause / Reprendre</button>
                </div>
            </div>
        </div>
    )
}