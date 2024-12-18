import { useSelector, useDispatch } from "react-redux"
import { delete_article } from "../redux/actions";

export default function ListArtice() {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>les articles :</h2>
            { articles.map((e, k)=><div key={k}>{ e.designation } | { e.famille }| <button onClick={ () => dispatch(delete_article(e.id)) }>supprimer</button> | {e.id}</div>) }
        </div>
    )
}