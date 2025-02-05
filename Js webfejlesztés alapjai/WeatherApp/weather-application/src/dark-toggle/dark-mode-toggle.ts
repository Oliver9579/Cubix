export class DarkModeToggle {

  private readonly lightColors = {
    '--primary-font-color': '#242424',
    '--primary-font-color-inverse': '#e2e2e2',
    '--primary-color-50': '#e3c75f',
    '--primary-color-800': '#cc8d1a',
    '--secondary-color-50': '#36776e',
    '--secondary-color-800': '#164c45',
    '--background-color': '#f4f4f4',
  };

  private readonly darkColors = {
    '--primary-font-color': '#e3c75f',
    '--primary-font-color-inverse': '#242424',
    '--primary-color-50': '#36776E',
    '--primary-color-800': '#164c45',
    '--secondary-color-50': '#e3c75f',
    '--secondary-color-800': '#A27A30',
    '--background-color': '#16232E',
  };

  private readonly rootEl = document.querySelector<HTMLStyleElement>(':root');
  private readonly localStorageKey = 'color-schema';
  private readonly darkModeSwitchEl = document.getElementById('dark-mode-switch');

  constructor() {
    this.setSchema(this.getCurrentSchema());
  }

  public toggleDarkMode() {
    const currentSchema = this.getCurrentSchema();

    const newSchema = currentSchema === 'light' ? 'dark' : 'light';

    this.setSchema(newSchema);

  }

  private setSchema(scheme: 'light' | 'dark') {
    Object.entries(scheme === 'dark' ? this.darkColors : this.lightColors)
      .forEach(([key, value]) => this.rootEl!.style.setProperty(key, value));

    if (scheme === 'dark') {
      document.body.classList.add('dark');
      this.darkModeSwitchEl!.innerText = 'light_mode';
    } else {
      document.body.classList.remove('dark');
      this.darkModeSwitchEl!.innerText = 'dark_mode';
    }

    localStorage.setItem(this.localStorageKey, scheme);
  }

  private getCurrentSchema(): 'light' | 'dark' {
    const currentSchema = localStorage.getItem(this.localStorageKey);

    return currentSchema && currentSchema === 'dark' ? 'dark' : 'light';
  }
}