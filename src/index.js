import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './comp/store';
import { setMat, setNom, setSal, getTotal, addEmp, setErrors, delEmp } from './comp/actions';
import { useSelector, useDispatch } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const dispatch = useDispatch();

let E = [{ matricule: '001', nom: 'Jean Dupont', salaire: 3000}, 
    { matricule: '002', nom: 'Jean Dupont', salaire: 3500}, ];

const addEmployee = (employee) => {
    dispatch(addEmp(employee))
}

const handleSubmit = (e) => {
    const errors = {};
    e.preventDefault();
    const mat = useSelector((state) => state.mat);
    const nom = useSelector((state) => state.nom);
    const sal = useSelector((state) => state.sal);
    if (mat === '') {
        errors["matricule"] = 'champ non remplis';
    } else if ( nom === '') {
        errors["nom"] = 'champ non remplis';
    } else if ( sal === 0 ) {
        errors["salaire"] = 'champ non remplis';
    }   
    if (Object.keys(errors).length > 0) {
        dispatch(setErrors(errors));
        return;
    }
    addEmp({matricule: mat, nom: nom, salaire: sal});
    dispatch(setMat(''));
    dispatch(setNom(''));
    dispatch(setSal(''));
}

const supprimer = (mat) => {
    dispatch(delEmp(mat));
}

const ListerEmp = (employees) => {
    return(
        <ul>{employees.map((e) => <li>Matricule: {e.matricule}, Nom: {e.nom}, Salaire: {e.salaire}. <button onClick={ supprimer(e.mat) }>Supprimer</button></li>)}</ul>
    );
}
const Form = () => {
    const employees = useSelector((state) => state.employees);
    return(
        <form onSubmit={ handleSubmit }>
            Matricule: <input type='text' onChange={ (e) => dispatch(setMat(e.target.value))}/><br/>
            Nom: <input type='text' onChange={ (e) => dispatch(setMat(e.target.value))}/><br/>
            Salaire: <input type='text' onChange={ (e) => dispatch(setMat(e.target.value))}/><br/>
            <button type='submit'>Ajouter</button><br/>
            <button onClick={ calculerTotal(employees) }>Calculer Total</button>
            <ul>
                <ListerEmp employees={ employees }/>
            </ul>
        </form> 
    );
}
root.render(
    <App/>
);