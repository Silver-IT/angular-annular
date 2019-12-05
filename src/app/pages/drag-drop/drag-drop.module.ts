import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from '../../shared/shared.module';
import { DragDropComponent } from './drag-drop.component';

export const routes = [
  { path: '', component: DragDropComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragulaModule.forRoot(),
    SharedModule
  ],
  declarations: [
    DragDropComponent
  ]
})
export class DragDropModule { }