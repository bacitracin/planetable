import './Table.css';
import TableRow from './TableRow';

// TODO: Pull out headers?
const Table = ({ data }) => {
  console.log('the data table', data)
  return (
    <table className="table">
      <caption className="caption">Planet Statistics</caption>
      <thead>
        <tr>
          <th className="header" scope="col">Name</th>
          <th className="header" scope="col">Climate</th>
          <th className="header" scope="col">Number of Residents</th>
          <th className="header" scope="col">Terrains</th>
          <th className="header" scope="col">Population</th>
          <th className="header" scope="col">Surface area covered by water (in km2)</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((planet) => <TableRow planet={planet} />)}
      </tbody>
    </table>
)}

export default Table;
