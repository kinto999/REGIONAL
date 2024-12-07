
import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import {addFruit,viderFruit} from './Actions/actionsFruit'
import './App.css'
import ListFruits2 from './ListFruits2'
export default function App2(props){
    const dispatch=useDispatch()
    const [nomFruit,setNonFruit]=useState('')
    return(<div className='container'>
        <h5>composant App 2</h5>
    <label htmlFor='fruit'> <b>fruit: </b></label><input onChange={(e)=>setNonFruit(e.target.value) } id='fruit' value={nomFruit} />
    <button onClick={()=>{dispatch(addFruit(nomFruit));setNonFruit('')}}>Ajouter</button>
    <ListFruits2/>
    <button onClick={()=>dispatch(viderFruit())}>vider liste</button>
    </div>)
}

