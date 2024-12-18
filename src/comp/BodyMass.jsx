import { useState } from "react"


export default function CalculBMI() {
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [bmi, setBMI] = useState(0);
    const [info, setInfo] = useState({});

    const handlecalculer = () => {
        setBMI(poids*10000/taille^2);
        if(bmi < 19) {
            setInfo({text: "sous poids.", color: "red"});
        } else if (19 <= bmi <= 25) {
            setInfo({text: "normal.", color: "green"});
        } else {
            setInfo({text: "surpoids.", color: "orange"});
        }
    }
    return(
        <div className="bodymass">
            <h1>body mass index</h1>
            <label htmlFor="poids">Poids en (Kg)</label>
            <input type="text" id="poids" onChange={(e) => setPoids(e.currentTarget.value)}/>
            <label htmlFor="taille">Taille en (cm)</label>
            <input type="text" id="Taille" value={taille} onChange={(e) => setTaille(e.currentTarget.value)}/>
            <button onClick={handlecalculer}>calculer</button>
            { bmi !== 0 ? <p>BMI: {bmi} <span style={{color: info.color}}>{info.text}</span></p> : null }
        </div>
    )
}