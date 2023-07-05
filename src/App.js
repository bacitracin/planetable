import './App.css';
import { useEffect, useState } from 'react';
import { PLANET_API_URL } from './constants';
import Table from './Components/Table';

function App() {
  // TODO: Sort planets alphabetically, error handling
  async function getData() {
    const response = await fetch(PLANET_API_URL);
    const jsonData = await response.json();
    setData(jsonData.results);
    setLoading(false);
  }

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
    console.log('data', data)
  }, [])

  return (
    <div className="container">
      <h1>Star Wars Planets</h1>
      {loading && <div>Loading...</div>}
      {!loading && data && <Table data={data} />}
      {!loading && !data && <div>No results found.</div>}
    </div>
  );
}

export default App;
