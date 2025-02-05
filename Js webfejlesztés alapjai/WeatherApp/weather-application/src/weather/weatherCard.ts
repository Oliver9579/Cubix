import { WeatherData } from './weather-data.model.ts';

export class WeatherCard {

  constructor(city: string, date: string, weatherData: WeatherData) {

    const minTemp = Math.round(weatherData.minTemp);
    const maxTemp = Math.round(weatherData.maxTemp);

    const cardsContainer = document.getElementById('weather-container')!;

    const cardNumber = document.querySelectorAll('.weather-card').length;

    cardsContainer.insertAdjacentHTML('afterbegin', `
      <div class="weather-card">
      <h4>${city} - ${date}</h4>
        <p>Min: ${minTemp}°C</p>
        <p>Max: ${maxTemp}°C</p>
        
        <div style="display: flex; align-items: center; justify-content: center">
          <button id="delete-btn-${cardNumber}">Delete</button>
        </div>
      </div>
      `);

    document.getElementById(`delete-btn-${cardNumber}`)?.addEventListener('click', (e) => {
      (e.target as HTMLElement).closest('.weather-card')?.remove();
    });
  }
}