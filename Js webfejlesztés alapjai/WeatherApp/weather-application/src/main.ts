import './style.scss';
import { SearchForm } from './search/search.ts';
import { WeatherService } from './weather/weather.ts';

document.addEventListener('DOMContentLoaded', () => {
  const weatherService = new WeatherService();
  const searchForm = new SearchForm(weatherService);
})