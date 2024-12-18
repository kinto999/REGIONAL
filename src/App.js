import CalculBMI from "./comp/BodyMass";
import Articles from "./comp/articles";
import AddArticle from './comp/AddArticle';
import ListArtice from "./comp/ListArticle";

function App() {
  return (
    <div className="App">
        <CalculBMI/>
        <AddArticle/>
        <ListArtice/>
        {/* <Articles/> */}
    </div>
  );
}

export default App;
