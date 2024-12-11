import { useSelector } from "react-redux";
import ListerStagaires from "./compoenents/stagaire/listerStagaires";
import Header from "./Header";
import StagaireApi from "./StagaireApi";

export default function Home() {
    const stagaires = useSelector((state) => state.stagaires);
    return(
        <div className="home">
            <Header/>
            <ListerStagaires stagaires={stagaires}/>
            <StagaireApi/>
        </div>
    )
}