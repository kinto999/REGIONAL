
import { useSelector, useDispatch } from "react-redux"
import { add_article } from "../redux/actions";
import { useState } from "react";

export default function ListArtice() {
    const [fam, setFam] = useState('')
    const [des, setDes] = useState('')
    const dispatch = useDispatch();
    const LastId = useSelector(state=>state.articles.at(-1).id);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add_article({id: LastId+1, designation: des, famille: fam}))
        setFam('');
        setDes('');
    }
    return(
        <form onSubmit={handleSubmit}>
            designation : 
            <input type="text" value={des} onChange={(e)=>setDes(e.target.value)}/>
            famille :
            <input type="text" value={fam} onChange={(e)=>setFam(e.target.value)}/>
            <button type="submit">ajouter article</button>
        </form>
    )
}