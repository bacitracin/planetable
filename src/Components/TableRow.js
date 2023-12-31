import { calcPlanetWaterCoverage, formatNumber } from '../utils';
import './TableRow.css';

const TableRow = ({ planet }) => {
  const { climate, diameter, name, residents, terrain, population, surface_water,  url } = planet;

  const formattedClimate = (!climate || climate === 'unknown') ? '?' : climate;
  const formattedTerrain = (!terrain || terrain === 'unknown') ? '?' : terrain;
  const formattedPopulation = (!population || population === 'unknown') ? '?' : formatNumber(population);
  const residentsCount = residents ? residents.length : '?';
  const waterCoverage = calcPlanetWaterCoverage({ diameter: diameter, percentage: surface_water });

  return (
    <tr>
      <th className="cell" scope="row">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <td className="cell">{formattedClimate}</td>
      <td className="cell">{residentsCount}</td>
      <td className="cell">{formattedTerrain}</td>
      <td className="cell">{formattedPopulation}</td>
      <td className="cell">{waterCoverage}</td>
    </tr>
)};

export default TableRow;
