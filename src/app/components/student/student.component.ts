import { Component, OnInit } from '@angular/core';
import { StudentService} from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor( private studentService:StudentService) { }
  students:Student[];


  ngOnInit(): void {

   this.students= this.studentService.onGet();
  }
  onDelete(id:Number){
    console.log(id);

    this.studentService.onDelete(id);

  }

}
