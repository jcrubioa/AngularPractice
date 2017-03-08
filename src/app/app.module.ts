import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';

import { StudentFormComponent } from './student-form.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
