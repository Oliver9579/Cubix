import { Coordinates } from './coordinates.model.ts';

export class WeatherService {

  public async getWeatherData(city: string, date: string) {
    try {
      const coordinates = await this.getCoordinates(city);
      const weatherData = await this.loadWeatherData(coordinates, date);
      return weatherData;
    } catch (e) {
      throw e;
    }
  }

  private async getCoordinates(city: string): Promise<Coordinates> {

    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${city}&lang=en&limit=1&type=city&apiKey=e14eaae947f74ab3bffeb0354e277d6e`, { method: 'GET' });
    const body = await response.json();

    return new Promise((resolve, reject) => {
      const result = {
        lat: body.features[0].geometry.coordinates[1],
        lon: body.features[0].geometry.coordinates[0],
      };

      if (result) {
        resolve(result);
      } else {
        reject(new Error(`Couldn't geocode ${city}`));
      }
    });
  }

  private async loadWeatherData(coordinates: Coordinates, date: string) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&daily=apparent_temperature_max,apparent_temperature_min&timezone=Europe/Budapest`,
    );
    const body = await response.json();

    const dateIndex = body.daily.time.findIndex((d: string) => d === date);

    return {
      minTemp: body.daily.apparent_temperature_min[dateIndex],
      maxTemp: body.daily.apparent_temperature_max[dateIndex],
    };
  }
}