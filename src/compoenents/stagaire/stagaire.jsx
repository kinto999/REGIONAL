import { Link } from "react-router-dom"

export default function Stagaire({nom, image_url}) {
    return(
        <div className="stagaire">
            <Link to={"/"+nom}><img src={image_url} alt="no internet"/></Link>
            <h3>{nom}</h3>
        </div>
    )
}