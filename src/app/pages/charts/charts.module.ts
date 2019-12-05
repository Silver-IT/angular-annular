import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../shared/shared.module';
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';

export const routes = [
  { path: '', redirectTo: 'bar', pathMatch: 'full'},
  { path: 'bar', component: BarComponent, data: { breadcrumb: 'Bar Charts' } },
  { path: 'pie', component: PieComponent, data: { breadcrumb: 'Pie Charts' } },
  { path: 'line', component: LineComponent, data: { breadcrumb: 'Line Charts' } },
  { path: 'bubble', component: BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    BarComponent, 
    BubbleComponent, 
    LineComponent, 
    PieComponent
  ]
})
export class ChartsModule { }