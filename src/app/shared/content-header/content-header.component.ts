import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input('icon') icon:any;
  @Input('title') title:any;
  @Input('desc') desc:any;
  @Input('hideBreadcrumb') hideBreadcrumb:boolean = false;
  @Input('hasBgImage') hasBgImage:boolean = false;
  @Input('class') class:any;
  constructor() { }

  ngOnInit() {
  }

}
