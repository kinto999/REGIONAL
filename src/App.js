import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [api, setApi] = useState('');

  useEffect(()=>{
    axios.get(api).then((response)=>response.data).then((data)=>setData(data));
  }, [api])
  const handleapichange = (e) => {
    setApi(e.target.value);
  }
  return (
    <div className="App">
        api link : <input type='text' onChange={handleapichange}/>
        <p>data count is : {data.length}.</p>
    </div>
  );
}

export default App;
