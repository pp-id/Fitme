import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExerciseComponent } from './dashboard/add-exercise/add-exercise.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseListComponent } from './dashboard/exercise-list/exercise-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addExercise', component: AddExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
