import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  header:string;
  student:Student={
    id:+'',
    duration:+'',
    course:'',

  }

  constructor(private router:Router, private route:ActivatedRoute,private studentService:StudentService) { }

  ngOnInit(): void {
   this.id= +this.route.snapshot.paramMap.get('id');
   this.header=this.id===0? 'Add Student': 'Edit Student';

   if(this.id!=0)
   {
     this.student=this.studentService.onGetStudent(this.id);
   }
  }
  onSubmit(form: NgForm){
    let student:Student={
      id:form.value.id,
      course:form.value.course,
      duration:form.value.duration


    }
    if(this.id===0){
      this.studentService.onAdd(student);
    }
    else{
      this.studentService.onUpdate(student);
    }
    this.router.navigateByUrl('');

 }

}
