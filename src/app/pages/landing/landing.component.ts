import { Component, ViewEncapsulation } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class LandingComponent {
  public menuItems;  
  public settings: Settings;  
  constructor(public appSettings:AppSettings, private landingService:LandingService) {
    this.settings = this.appSettings.settings; 
  }

  ngOnInit(){
    this.menuItems = this.landingService.getMenuItems();    
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}