import { Component } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html'
})
export class SlideToggleComponent {
  public settings: Settings;
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings;     
  }

  color = 'accent';
  checked = false;
  disabled = false;

}