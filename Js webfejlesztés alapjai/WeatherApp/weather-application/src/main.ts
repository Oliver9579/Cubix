import './style.scss';
import { SearchForm } from './search/search.ts';
import { WeatherService } from './weather/weather.ts';
import { DarkModeToggle } from './dark-toggle/dark-mode-toggle.ts';

document.addEventListener('DOMContentLoaded', () => {
  const weatherService = new WeatherService();
  const searchForm = new SearchForm(weatherService);

  const darkModeService = new DarkModeToggle();
  document.getElementById('dark-mode-switch')?.addEventListener('click', () => darkModeService.toggleDarkMode());
});