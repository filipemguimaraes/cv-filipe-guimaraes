import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { CvDetailComponent } from './curriculum/cv-detail/cv-detail.component';
import { CurriculumData } from './curriculum/curriculum-data';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    CurriculumComponent,
    OnlineCoursesComponent,
    CvDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(CurriculumData, {delay: 1000}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
