import { PI } from "./constants";

// Format number to have spaces instead of commas
export const formatNumber = (number) => {
  return parseInt(number).toLocaleString('en-US').replace(/,/g, " ");
}

const calcSphereSurfaceArea = (diameter) => {
  return diameter * diameter * PI;
}

export const calcPlanetWaterCoverage = ({ diameter, percentage }) => {
  if (!percentage || percentage === 'unknown' || !diameter || diameter === 'unknown') {
    return '?';
  } else {
    const surfaceArea = calcSphereSurfaceArea(diameter);
    const waterCoverage = Math.round(parseInt(percentage) * 0.01 * surfaceArea);
    return formatNumber(waterCoverage);
  }
}
