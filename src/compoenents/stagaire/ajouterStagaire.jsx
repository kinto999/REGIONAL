import { useState } from "react";
import { ajouterStagaire } from "../redux/seilStagaire";
import { useDispatch } from "react-redux";

export default function AjouterStagaire() {
    const [image_url, setImage_url] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [filiere, setFiliere] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ajouterStagaire({image_url:image_url, nom:nom, prenom:prenom, filiere:filiere}));
        alert('stagaire ajouter!!!!');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={image_url} onChange={ (e) => setImage_url(e.target.value)} placeholder="ajouter votre lien d'image"/>
            <input type="text" value={nom} onChange={ (e) => setNom(e.target.value)} placeholder="ajouter votre nom"/>
            <input type="text" value={prenom} onChange={ (e) => setPrenom(e.target.value)} placeholder="ajouter votre prenom"/>
            <input type="text" value={filiere} onChange={ (e) => setFiliere(e.target.value)} placeholder="ajouter votre filiere"/>
            <button type="submit">Ajouter</button>
        </form>
    )
}