
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FullCalendarModule } from 'primeng/fullcalendar';
import {GMapModule} from 'primeng/gmap'
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SpinnerModule} from 'primeng/spinner';
import { SliderModule} from 'primeng/slider';
import { RatingModule} from 'primeng/rating';
import { ContextMenuModule} from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { StepsModule} from 'primeng/steps';
import {TreeModule} from 'primeng/tree';
import {ListboxModule} from 'primeng/listbox'
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview'
import { TooltipModule} from 'primeng/tooltip';
import { DragDropModule} from 'primeng/dragdrop';
import {ToastModule} from 'primeng/toast'
import { GalleriaModule} from 'primeng/galleria';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MenuModule } from 'primeng/menu';
import {InputMaskModule} from 'primeng/inputmask';

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "timesheet", component: TimesheetComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "profile", component: ProfileComponent},
  { path: "settings", component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    TableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    FullCalendarModule,
    TreeModule,
    GMapModule,
    DataViewModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    DragDropModule,
    GalleriaModule,
    PanelModule,
    ScrollingModule,
  ],
  providers: [ ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
