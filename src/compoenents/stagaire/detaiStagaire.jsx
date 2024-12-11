import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function DetaiStagaire() {
    const { nom } = useParams();
    const stagaire = useSelector((state) => state.stagaires.find((stagaire) => stagaire.nom === nom));
    return(
        <div>
            <p>nom : {stagaire.nom}</p><br/>
            <p>prenom : {stagaire.prenom}</p><br/>
            <p>filiere : {stagaire.filiere}</p><br/>
            <p>image : </p><br/>
            <img src={stagaire.image_url} alt="nothing"/>
        </div>
    )
}