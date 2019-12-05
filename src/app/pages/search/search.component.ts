import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  param:any;
  title:string = 'Nothing Found';
  description:string = 'Sorry, but nothing matched your search terms. Please try again with some different keywords.';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        if(params['name']){
            this.param = params['name'];
            this.title = 'Search results';
            this.description = 'The following results were found for ' + params['name'];
        }
    });  
  }

}
