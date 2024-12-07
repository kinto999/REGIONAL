import { useSelector, useDispatch } from "react-redux";
import { addArticle, setdes, setid, setprix, delarticle, calculertotal} from './actions';

export default function Article() {
    const id = useSelector((state) => state.id);
    const des = useSelector((state) => state.des);
    const prix = useSelector((state) => state.prix);
    const articles = useSelector((state) => state.articles);
    const total = useSelector((state) => state.total);
    const dispatch = useDispatch();
    
    return(
        <div>
            <h1>Ajout d'un article</h1>
            id: <input type="text" onChange={ (e) => dispatch(setid(e.target.value)) }/><br/>
            designation: <input type="text" onChange={ (e) => dispatch(setdes(e.target.value)) }/><br/>
            prix: <input type="text" onChange={ (e) => dispatch(setprix(e.target.value)) }/><br/>
            <button onClick={ () => dispatch(addArticle({id: id, designation: des, prix: prix})) }>Ajouter</button><br/>
            <ul>
                {articles.map((e) => <li key={e.id}>id: {e.id} | designation: {e.designation} | prix: {e.prix} | <button onClick={ () => dispatch(delarticle(e.id))}>supprimer</button></li>)}
            </ul>
            <button onClick={ () => dispatch(calculertotal()) }>Calculer total</button><br/>
            { total !== 0 ? <p>total est : {total}</p> : null }
        </div>
    );
}