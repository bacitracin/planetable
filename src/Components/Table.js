import './Table.css';
import TableRow from './TableRow';

// TODO: Pull out headers?
const Table = ({ data }) => {
  console.log('the data table', data)
  return (
    <table>
      <caption>Planet Statistics</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Number of Residents</th>
          <th>Terrains</th>
          <th>Population</th>
          <th>Surface area covered by water (in km2)</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((planet) => <TableRow planet={planet} />)}
      </tbody>
    </table>
)}

export default Table;
