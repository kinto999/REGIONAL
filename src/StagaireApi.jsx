import { useState, useEffect } from "react";
import axios from "axios";

export default function StagaireApi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            const data = await response.data.results;
            setUsers(data);
        }
        getData();
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>{user.name.first} {user.name.last}</div>
            ))}
        </div>
    );
}
