import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addtask, deletetask, updatetask } from './store.jsx'

export default function Addtask() {
    const tasks = useSelector((state) => state.tasks);
    const [task, setTask] = useState('');
    const [idS, setIdS] = useState(''); 
    const dispatch = useDispatch();
    const lastId = tasks.length > 0 ? tasks.at(-1).id : 0;
    
    return(
        <div>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
            <button onClick={() => dispatch(addtask({id: lastId+1, task: task}))}>add task</button><br/>
            <ul>
                { tasks.map((e)=><li key={e.id} onClick={()=> {setIdS(e.id); setTask(e.task)}} className={e.id === idS ? "selected" : ""}>{e.task}</li>) }
            </ul><br/>
            <button onClick={() => dispatch(deletetask(idS))}>delete task</button>
            <button onClick={() => dispatch(updatetask({id: idS, task: task}))}>update task</button>
        </div>
    )
}
//