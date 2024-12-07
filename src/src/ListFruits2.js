import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import './listFruits.css'
export default function ListFruits2(){
const fruits=useSelector(data=>data.fruits)
useEffect(()=>console.log('la liste est mis ajour'))
return (<div className='fruits'>
    <h5>Composant liste fruits 2</h5>
     <ul>
    {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}
    </ul>
</div>)
}