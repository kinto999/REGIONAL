import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className="header">
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/ajouterStagaire">Ajouter Un Stagaire</Link></li>
            </ul>
        </div>
    )
}