import Chart from 'chart.js/auto';
import { CovidData } from './covid-data.model.ts';

export class CovidChart {
  private vaccinatedChartInstance: Chart | null = null;
  private deathChartInstance: Chart | null = null;

  constructor() {}

  public renderChart(covidData: CovidData) {
    try {
      const vaccinatedCanvas = document.getElementById(
        'vaccinated-chart',
      ) as HTMLCanvasElement;
      const deathCanvas = document.getElementById(
        'death-chart',
      ) as HTMLCanvasElement;

      if (this.vaccinatedChartInstance) {
        this.vaccinatedChartInstance.destroy();
      }
      if (this.deathChartInstance) {
        this.deathChartInstance.destroy();
      }

      this.vaccinatedChartInstance = new Chart(vaccinatedCanvas, {
        type: 'bar',
        data: {
          labels: [covidData.country],
          datasets: [
            {
              label: 'Population',
              data: [covidData.population],
              backgroundColor: 'rgba(105,105,105, 0.5)',
            },
            {
              label: 'Confirmed Cases',
              data: [covidData.confirmed],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Vaccinated',
              data: [covidData.vaccinated],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        },
      });

      this.deathChartInstance = new Chart(deathCanvas, {
        type: 'bar',
        data: {
          labels: [covidData.country],
          datasets: [
            {
              label: 'Deaths',
              data: [covidData.deaths],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
              label: 'Deaths per Million',
              data: [(covidData.deaths / covidData.population) * 1000000],
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
