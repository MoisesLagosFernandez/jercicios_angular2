import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './pages/list-course/list-course.component';

const routes: Routes = [
  {
    path: '',
    component: ListCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
