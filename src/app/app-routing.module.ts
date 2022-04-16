import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'cv', component: CurriculumComponent },
  { path: 'courses', component: OnlineCoursesComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
