import { CovidData } from './covid-data.model.ts';

export class CovidChartsService {
  public async getChartsData(country: string) {
    try {
      return await this.loadChartsData(country);
    } catch (e) {
      throw e;
    }
  }

  private async loadChartsData(country: string): Promise<CovidData> {
    const casesResponse = await fetch(
      `https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`,
      { method: 'GET' },
    );
    const casesBody = await casesResponse.json();

    const vaccinesResponse = await fetch(
      `https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`,
      { method: 'GET' },
    );
    const vaccinesBody = await vaccinesResponse.json();

    return {
      country: casesBody.country,
      population: casesBody.population,
      confirmed: casesBody.confirmed,
      vaccinated: vaccinesBody.people_vaccinated,
      deaths: casesBody.deaths,
    };
  }
}
