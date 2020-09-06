import { Injectable } from '@angular/core';
import { Student} from '../models/student.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]= [
    {
      id:1,
      course: "BCA",
      duration: 3

    },
    {
      id:2,
      course: "mca",
      duration: 2

    },
    {
      id:3,
      course: "Mtech",
      duration: 2

    }


     ];
  constructor() { }
  onGet(){

    return this.students;
  }

  onGetStudent(id:Number){
    return this.students.find(x=>x.id===id);

  }

  onUpdate(student:Student){
    let oldstudent= this.students.find(x=>x.id===student.id);
    oldstudent.course=student.course;
    oldstudent.duration=student.duration;



  }

  onAdd(student:Student){
    this.students.push(student);

  }
  onDelete(id:Number){
    let student= this.students.find(x=>x.id===id);
    let index=this.students.indexOf(student,0);
    this.students.splice(index,1);


  }
}
