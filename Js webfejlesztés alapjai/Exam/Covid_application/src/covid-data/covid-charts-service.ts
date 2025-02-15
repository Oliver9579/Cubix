import { CovidData } from './covid-data.model.ts';
import { Countries } from './countries.ts';

export class CovidChartsService {
  public async getChartsData() {
    try {
      return await this.loadChartsData();
    } catch (e) {
      throw e;
    }
  }

  private async loadChartsData() {
    const countriesData: CovidData[] = [];

    for (const i of Countries) {
      const casesResponse = await fetch(
        `https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${i}`,
        { method: 'GET' },
      );
      const casesBody = await casesResponse.json();

      const vaccinesResponse = await fetch(
        `https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${i}`,
        { method: 'GET' },
      );
      const vaccinesBody = await vaccinesResponse.json();

      const covidData: CovidData = {
        country: i,
        population: casesBody.population,
        confirmed: casesBody.confirmed,
        vaccinated: vaccinesBody.people_vaccinated,
        deaths: casesBody.deaths,
      };

      countriesData.push(covidData);
    }
    console.log(countriesData);
    return countriesData;
  }
}
