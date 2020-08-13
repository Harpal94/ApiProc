import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insertstudent-api',
  templateUrl: './insertstudent-api.component.html',
  styleUrls: ['./insertstudent-api.component.css']
})
export class InsertstudentApiComponent implements OnInit {

  constructor(private studentservice: StudentService,private route :Router) { }
  inststudent:IStudent={id:0,name:"",hobby:"",mobileNo:"",isActive:true};

  ngOnInit(): void {
  }
  RedirectList() {
    this.studentservice.savestudent(this.inststudent).subscribe(data=>{
      this.route.navigate(['/studentlist'])
    });
  }
}
