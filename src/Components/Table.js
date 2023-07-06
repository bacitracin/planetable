import './Table.css';
import TableRow from './TableRow';
import { PLANET_TABLE_HEADERS } from '../constants';

const Table = ({ data }) => {
  return (
    <table className="table">
      <caption className="caption">Planets listed in ascending alphabetical order. "?" indicates unknown.</caption>
      <thead>
        <tr>
          {PLANET_TABLE_HEADERS.map(({ id, label }) => <th className="header" key={`${id}`} scope="col">{label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((planet) => <TableRow key={`${planet.url}`} planet={planet} />)}
        {data.length === 0 && (
          <tr>
            <td className="noResultsMessage" colspan="6">No results found.</td>
          </tr>)}
      </tbody>
    </table>
)};

export default Table;
