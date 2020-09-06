import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './components/student/student.component';
import { EditComponent } from './components/student/edit/edit.component';

const routes: Routes = [
{path:'', component:StudentComponent},
{path:'student/add/:id', component:EditComponent},
{path:'student/edit/:id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
