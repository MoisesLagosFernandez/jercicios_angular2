import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCourseComponent } from './pages/list-course/list-course.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule

  ]
})
export class CoursesModule { }
