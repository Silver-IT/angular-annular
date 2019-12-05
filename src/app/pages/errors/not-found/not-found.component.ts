import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent{
  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router, public fb: FormBuilder) {
    this.settings = this.appSettings.settings; 
  }

  ngOnInit(){
    this.form = this.fb.group({
      'param': [null, Validators.required]
    });
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.router.navigate(['/search', values['param'] ]);
    }
  }

  public goHome(): void {
    this.router.navigate(['/']);
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

}