import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { CvDetailComponent } from './curriculum/cv-detail/cv-detail.component';

const routes: Routes = [
  { path: 'cv', component: CurriculumComponent },
  { path: 'cv/:id', component: CvDetailComponent },
  { path: 'courses', component: OnlineCoursesComponent },
  { path: '', redirectTo: 'cv', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
