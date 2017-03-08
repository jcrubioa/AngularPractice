import { Component } from '@angular/core';

import { Student }    from './student';

@Component({
  
  selector: 'student-form',
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {

	model = new Student(90, 'pepito', 3.7);
  	
  newStudent() {
  		this.model = new Student(0,'',0);
	}

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}