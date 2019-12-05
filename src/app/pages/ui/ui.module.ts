import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { GridsComponent } from './grids/grids.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

export const routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full'},
  { path: 'buttons', component: ButtonsComponent, data: { breadcrumb: 'Buttons' } },
  { path: 'cards', component: CardsComponent, data: { breadcrumb: 'Cards' } },
  { path: 'lists', component: ListsComponent, data: { breadcrumb: 'Lists' } },
  { path: 'grids', component: GridsComponent, data: { breadcrumb: 'Grids' } },
  { path: 'tabs', component: TabsComponent, data: { breadcrumb: 'Tabs' } },
  { path: 'expansion-panel', component: ExpansionPanelComponent, data: { breadcrumb: 'Expansion Panel' } },
  { path: 'chips', component: ChipsComponent, data: { breadcrumb: 'Chips' } },
  { path: 'progress', component: ProgressComponent, data: { breadcrumb: 'Progress' } },
  { path: 'dialog', component: DialogComponent, data: { breadcrumb: 'Dialog' } },
  { path: 'tooltip', component: TooltipComponent, data: { breadcrumb: 'Tooltip' } },
  { path: 'snack-bar', component: SnackBarComponent, data: { breadcrumb: 'Snackbar' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  declarations: [
    ButtonsComponent, 
    CardsComponent, 
    ListsComponent, 
    GridsComponent, 
    TabsComponent, 
    ExpansionPanelComponent, 
    ChipsComponent, 
    ProgressComponent, 
    TooltipComponent, 
    DialogComponent, 
    DialogOverviewExampleDialog,
    SnackBarComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ]
})
export class UiModule { }
