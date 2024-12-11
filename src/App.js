import { BrowserRouter, Route, Routes } from "react-router-dom";
import AjouterStagaire from "./compoenents/stagaire/ajouterStagaire";
import 
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={}/>
            <Route path="/:nom" element={}/>
            <Route path="/ajouterStagaire" element={}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
