import { CovidChartsService } from './covid-charts-service.ts';
import { CovidChart } from './covid-chart.ts';

export class SearchForm {

  form: HTMLFormElement;
  countryInput: HTMLInputElement;
  submitButton: HTMLButtonElement;
  covidDataContainer: HTMLElement;
  errorMessage: HTMLElement;
  covidChart: CovidChart;

  constructor(private readonly covidService: CovidChartsService) {
    this.form = document.getElementById('country-form')! as HTMLFormElement;
    this.countryInput = document.getElementById('country-input')! as HTMLInputElement;
    this.submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
    this.covidDataContainer = document.getElementById('covid-data-container')! as HTMLElement;
    this.errorMessage = document.getElementById('error-message') as HTMLElement;

    this.covidChart = new CovidChart();

    this.submitHandler();
  }

  private submitHandler() {
    this.form.addEventListener('submit', async e => {
      e.preventDefault();

      this.covidDataContainer.insertAdjacentHTML('afterbegin', `
      <div id="loader-container" class="loader-container">
        <div class="loader"></div>
      </div>
      `);
      this.submitButton.disabled = true;

      try {
        const covidData = await this.covidService.getChartsData(
          this.countryInput.value);

        this.covidChart.renderChart(covidData);
      } catch (e) {
        this.errorMessage.style.display = 'block';
        setTimeout(() => this.errorMessage.style.display = 'none', 3000);
      } finally {
        this.submitButton.disabled = false;
        this.covidDataContainer.removeChild(document.getElementById('loader-container')!);
      }

      this.form.reset();
    });
  }
}