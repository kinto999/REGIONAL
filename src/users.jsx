import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('link').then((response)=>response.data).then((data)=>setUsers(data));
        fetch('link').then((response) => { return response.json() }).then((users) => setUsers(users));
    }, []);

    return(
        <div>
            <h2>users names</h2>
        <ul>
            {users.map((e, i) => <li key={i}>{e.name}</li>)}
        </ul>
        </div>
    )
}