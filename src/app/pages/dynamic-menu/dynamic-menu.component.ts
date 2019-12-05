import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { debounceTime } from 'rxjs/operators';
import { Menu } from '../../theme/components/menu/menu.model';
import { MenuService } from '../../theme/components/menu/menu.service';
import { DynamicMenuService } from './dynamic-menu.service';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { VerticalMenuComponent } from '../../theme/components/menu/vertical-menu/vertical-menu.component';
import { blockTransition } from '../../theme/utils/app-animation';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  providers: [ DynamicMenuService, MenuService ],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class DynamicMenuComponent implements OnInit {
  public settings: Settings;
  public menuItems:Array<Menu>;
  public icons = ['home','person', 'card_travel', 'delete', 'event', 'favorite', 'help' ]
  public form:FormGroup;
  constructor(public appSettings:AppSettings, 
              public formBuilder: FormBuilder, 
              public snackBar: MatSnackBar,
              private menuService:MenuService,
              private dynamicMenuService:DynamicMenuService) {
    this.settings = this.appSettings.settings; 
    this.menuItems = this.menuService.getVerticalMenuItems();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'title': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'icon': null,
      'routerLink': ['', Validators.required],    
      'href': ['', Validators.required],            
      'target': null,
      'hasSubMenu': false,
      'parentId': 0
    });
  }

  ngAfterViewInit() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((menu:Menu) => {  
      if(menu.routerLink && menu.routerLink != ''){
        this.form.controls['href'].setValue(null);
        this.form.controls['href'].disable();
        this.form.controls['href'].clearValidators();
        this.form.controls['target'].setValue(null);
        this.form.controls['target'].disable();
      }
      else{
        this.form.controls['href'].enable();
        this.form.controls['href'].setValidators([Validators.required]);
        this.form.controls['target'].enable();
      }
      this.form.controls['href'].updateValueAndValidity();

      if(menu.href && menu.href != ''){
        this.form.controls['routerLink'].setValue(null);
        this.form.controls['routerLink'].disable();
        this.form.controls['routerLink'].clearValidators();
        this.form.controls['hasSubMenu'].setValue(false);
        this.form.controls['hasSubMenu'].disable();
      }
      else{
        this.form.controls['routerLink'].enable();
        this.form.controls['routerLink'].setValidators([Validators.required]);
        this.form.controls['hasSubMenu'].enable();
      }
      this.form.controls['routerLink'].updateValueAndValidity();
    })
  }

  onSubmit(menu:Menu):void {
    if (this.form.valid) {
      this.dynamicMenuService.addNewMenuItem(VerticalMenuComponent, this.menuItems, menu);
      this.snackBar.open('New menu item added successfully!', null, {
        duration: 2000,
      });
      this.form.reset({
        hasSubMenu:false,
        parentId:0
      });     
    }
  } 

}