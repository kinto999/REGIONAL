
import { useSelector, useDispatch } from "react-redux";
import { addfruit, delallfruits } from "./actions";
import { useState } from "react";

export default function ListerFruits() {

    const fruits = useSelector((state) => state.fruits);
    const [fruit, setFruit] = useState('');

    const dispatch = useDispatch();
    
    return(
        <div>
            <input onChange={ (e) => setFruit(e.target.value) } value={ fruit } type="text"/><button onClick={ () => {dispatch(addfruit(fruit)); setFruit('')} }>Ajouter</button>
            <ul>
                { fruits.map((e, i) => <li key={i}>{e}.</li>) }
            </ul>
            <button onClick={ () => dispatch(delallfruits()) }>remove all fruits</button>
        </div>
    )
}