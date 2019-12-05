import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { SharedModule } from '../../shared/shared.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';

export const routes = [
  { path: '', component: ScheduleComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SharedModule
  ],
  declarations: [
    ScheduleComponent, 
    ScheduleDialogComponent
  ],
  entryComponents: [
    ScheduleDialogComponent
  ]
})
export class ScheduleModule { }