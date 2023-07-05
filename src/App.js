import './App.css';
import { useEffect, useState } from 'react';
import { PLANET_API_URL } from './constants';
import Table from './Components/Table';

function App() {
  // TODO: Sort planets alphabetically
  async function getData() {
    try {
      const response = await fetch(PLANET_API_URL);
      const jsonData = await response.json();
      const sortedData = jsonData?.results?.sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    } catch (error) {
      setError(error.toString());
    }
    setLoading(false);
  }

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  return (
    <main className="container">
      <h1>Star Wars Planet Statistics</h1>
      <div aria-live="polite">
        {loading && <div className="status">Loading...</div>}
        {!loading && data && <Table data={data} />}
        {!loading && !data && error && <div className="status">{`Error: ${error}`}</div>}
        {!loading && !data && !error && <div className="status">No results found.</div>}
      </div>
    </main>
  );
}

export default App;
