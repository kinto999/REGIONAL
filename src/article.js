import { useState } from 'react';
export default function Article() {
    const [article, setArticle] = useState('--------');
    const [designation, setDesignation] = useState('---------');
    const [prix, setPrix] = useState('----------');


    const handleArticleChange = (e) => {
        setArticle(e.target.value);
    }
    const handleDesChange = (e) => {
        setDesignation(e.target.value);
    }
    const handlePrixChange = (e) => {
        setPrix(e.target.value);
    }

    return(
        <div>
            article : <input type="text" onChange={handleArticleChange}/>
            designation: <input type="text" onChange={handleDesChange}/>
            prix: <input type="number" onChange={handlePrixChange}/>
            <hr/>
            <p>Bonjour : vous avez choisi l'article {article}, qui a la designation {designation} et le prix {prix}.</p>
        </div>
    )
}