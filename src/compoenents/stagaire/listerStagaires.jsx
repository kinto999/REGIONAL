import Stagaire from "./stagaire";

export default function ListerStagaires({stagaires}) {
    return(
        <div className="Liste">
            {stagaires.map((e, i) => <Stagaire key={i} nom={e.nom} image_url={e.image_url}/>)}
        </div>
    );
}