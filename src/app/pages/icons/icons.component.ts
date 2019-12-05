import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { IconsService } from './icons.service';

@Component({
  selector: 'app-material-icons',
  templateUrl: './icons.component.html',
  providers: [ IconsService ]
})
export class IconsComponent implements OnInit {
  public icons:any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private iconsService:IconsService) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.icons = this.iconsService.getIcons();
  }

}
