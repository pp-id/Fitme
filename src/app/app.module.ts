import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseListComponent } from './dashboard/exercise-list/exercise-list.component';
import { AddExerciseComponent } from './dashboard/add-exercise/add-exercise.component';
import { TimerComponent } from './dashboard/add-exercise/timer/timer.component';
import { SaveTimerComponent } from './dashboard/add-exercise/save-timer/save-timer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExerciseListComponent,
    AddExerciseComponent,
    TimerComponent,
    SaveTimerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
