import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { EditComponent } from './components/student/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
