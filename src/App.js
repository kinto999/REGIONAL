import { BrowserRouter, Route, Routes } from "react-router-dom";
import AjouterStagaire from "./compoenents/stagaire/ajouterStagaire";
import DetaiStagaire from "./compoenents/stagaire/detaiStagaire";
import Home from './Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:nom" element={<DetaiStagaire/>}/>
            <Route path="/ajouterStagaire" element={<AjouterStagaire/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
