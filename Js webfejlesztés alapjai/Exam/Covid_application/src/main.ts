import './style.scss';
import { CovidChartsService } from './covid-data/covid-charts-service.ts';
import { SearchForm } from './covid-data/search.ts';

document.addEventListener('DOMContentLoaded', () => {
  const covidService = new CovidChartsService();
  const searchForm = new SearchForm(covidService);
});
