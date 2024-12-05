
import { useSelector, useDispatch } from "react-redux";
import { addfruit, setfruit, delallfruits } from "./actions";

export default function ListerFruits() {

    const fruits = useSelector((state) => state.fruits);
    const fruit = useSelector((state) => state.fruit);

    const dispatch = useDispatch();
    
    return(
        <div>
            <input onChange={ (e) => dispatch(setfruit(e.target.value)) } type="text"/><button onClick={ dispatch(addfruit(fruit)) }>Ajouter</button>
            <ul>
                { fruits.map((e, i) => <li key={i}>{e}.</li>) }
            </ul>
            <button onClick={ dispatch(delallfruits()) }>remove all fruits</button>
        </div>
    )
}