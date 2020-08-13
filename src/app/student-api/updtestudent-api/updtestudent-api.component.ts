import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updtestudent-api',
  templateUrl: './updtestudent-api.component.html',
  styleUrls: ['./updtestudent-api.component.css']
})
export class UpdtestudentApiComponent implements OnInit {

  constructor(private route:Router,private student:StudentService,private router:ActivatedRoute) { }
  id:number;
  inststudent:IStudent={id:0,name:"",hobby:"",mobileNo:"",isActive:true};
  
  ngOnInit(): void {
    this.getstudentrecord();
  }
  
  getstudentrecord(){
    this.id=+this.router.snapshot.paramMap.get("id");
    this.student.getstudentbyid(this.id).subscribe({
      next:x=>this.inststudent=x
    });
  }
  updatestuds(){
    this.student.updatestud(this.inststudent).subscribe(data=>{
       this.route.navigate(['/studentlist'])
    });
  }
}
