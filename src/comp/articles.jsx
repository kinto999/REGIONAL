import axios from "axios";
import { useEffect, useState } from "react";

export default function Articles() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://freejson.com/api/articles').then((response) => setData(response.data));
    }, [])
    console.log(data);
}