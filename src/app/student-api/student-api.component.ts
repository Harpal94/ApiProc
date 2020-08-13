import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from './student';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-api',
  templateUrl: './student-api.component.html',
  styleUrls: ['./student-api.component.css']
})
export class StudentAPIComponent implements OnInit {
  constructor(private studentservice:StudentService,private route:Router) { 
  }
  objstudentget:IStudent[];
  
  ngOnInit(): void {
    this.getdata();
  }
getdata(){
  this.studentservice.getdata().subscribe({
    next:y=>this.objstudentget=y
  });
}

  insertRecdirect(){
    this.route.navigate(['/studentinsert']);
  }
  Delete(id:number){
    this.studentservice.Deletestud(id).subscribe(data=>{
      this.getdata();
    });
  }
}
