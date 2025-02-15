import './style.scss';
import { CovidChart } from './covid-data/covid-chart.ts';

document.addEventListener('DOMContentLoaded', () => {
  const covidCharts = new CovidChart();
  covidCharts.renderChart();
});
