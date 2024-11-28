import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [api, setApi] = useState('');
  const handleapichange = (e) => {
    setApi(e.target.value);
  }
  const handlegetdata = () => {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
      params: {
        lat: '35.5', // Replace with dynamic values if needed
        lon: '-78.5',
        units: 'imperial',
        lang: 'en'
      },
      headers: {
        'x-rapidapi-key': '4da9f59b3cmsh701191763aa10aep1e4ef3jsnb7de5916fb9b', // Use the dynamic API key
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
  
    axios
      .request(options)
      .then((response) => {
        console.log('Data fetched successfully:', response.data);
        setData(response.data.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        setData([]); // Optionally clear data on error
      });
    console.log('data', data);
  };
  
  return (
    <div className="App">
        api link : <input type='text' onChange={handleapichange} style={{width: '300px'}}/><br/><br/>
        <button onClick={handlegetdata}>get data</button>
        <p>data count is : {data.length}.</p>
    </div>
  );
}

export default App;
