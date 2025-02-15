import Chart from 'chart.js/auto';
import { CovidChartsService } from './covid-charts-service.ts';

export class CovidChart {
  private covidService: CovidChartsService;

  constructor() {
    this.covidService = new CovidChartsService();
  }

  public async renderChart() {
    try {
      const covidData = await this.covidService.getChartsData();
      const vaccinatedChart = document.getElementById(
        'vaccinated-chart',
      ) as HTMLCanvasElement;
      const deathChart = document.getElementById(
        'death-chart',
      ) as HTMLCanvasElement;

      new Chart(vaccinatedChart, {
        type: 'bar',
        data: {
          labels: covidData.map((data) => data.country),
          datasets: [
            {
              label: 'Population',
              data: covidData.map((data) => data.population),
              backgroundColor: 'rgba(105,105,105, 0.5)',
            },
            {
              label: 'Confirmed Cases',
              data: covidData.map((data) => data.confirmed),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Vaccinated',
              data: covidData.map((data) => data.vaccinated),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        },
      });

      new Chart(deathChart, {
        type: 'bar',
        data: {
          labels: covidData.map((data) => data.country),
          datasets: [
            {
              label: 'Deaths',
              data: covidData.map((data) => data.deaths),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
              label: 'Deaths per Million',
              data: covidData.map(
                (data) => (data.deaths / data.population) * 1000000,
              ),
              backgroundColor: 'rgba(255, 206, 86, 0.5)',
            },
          ],
        },
      });
    } catch (error) {
      console.error('Error rendering chart:', error);
    }
  }
}
