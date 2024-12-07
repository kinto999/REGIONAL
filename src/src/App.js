import React,{useState} from 'react'
import { connect} from 'react-redux'
import {addFruit,viderFruit} from './Actions/actionsFruit'
import './App.css'
import ListFruits from './ListFruits'
function App(props){
const [nomFruit,setNonFruit]=useState('')

    return(<div className='container'>
    <label htmlFor='fruit'> fruit</label><input onChange={(e)=>setNonFruit(e.target.value) } id='fruit' value={nomFruit} />
    <button onClick={()=>{props.ajouterFruit(nomFruit);setNonFruit('')}}>Ajouter</button>
   <ListFruits/>
    <button onClick={()=>props.viderList()}>vider liste</button>
    </div>)
}
function mapDispatchToProps(dispatch){
    return {
        ajouterFruit:function(myfruit){
        dispatch(addFruit(myfruit))
          },
      viderList:function(){dispatch(viderFruit())}
    }
    }
export default connect(null,mapDispatchToProps)(App)