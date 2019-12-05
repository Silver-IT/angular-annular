import { Component } from '@angular/core';
import { bubble } from '../charts.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html'
})
export class BubbleComponent {
  public bubble: any[];   
  public legendTitle = 'Legend';
  public showLegend = true;
  public tooltipDisabled = false;
  public showGridLines = true;
  public roundDomains = false;
  public maxRadius = 10;
  public minRadius = 3;
  public schemeType: string = 'ordinal';
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Census Date';
  public showYAxisLabel = true;
  public yAxisLabel = 'Life expectancy [years]';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public autoScale = true;
  public settings: Settings;
  
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {bubble})   
  }
  
  onSelect(event) {
    console.log(event);
  }

}
