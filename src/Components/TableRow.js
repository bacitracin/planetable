import { calcPlanetWaterCoverage, formatNumber } from '../utils';
import './TableRow.css';

const TableRow = ({ planet }) => {
  console.log('planet', planet)
  const { climate, diameter, name, residents, terrain, population, surface_water,  url } = planet;

  const formattedPopulation = population === 'unknown' ? '?' : formatNumber(population);
  const residentsCount = residents ? residents.length : '?';
  const waterCoverage = calcPlanetWaterCoverage({ diameter: diameter, percentage: surface_water })

  return (
    <tr>
      <td>
        <a href={url} target="_blank">
          {name}
        </a>
      </td>
      <td>{climate}</td>
      <td>{residentsCount}</td>
      <td>{terrain}</td>
      <td>{formattedPopulation}</td>
      <td>{waterCoverage}</td>
    </tr>
)}

export default TableRow;
