import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private Http:HttpClient) { }

  getlist:string='http://localhost/web/api/Student/GetAll';
  insertstudent:string='http://localhost/web/api/Student/InsertStudent';
  getstudentid:string='http://localhost/web/api/Student/Getstudentbyid/';
  updatestudentbyid:string='http://localhost/web/api/Student/UpdateStudent';
  DeleteStudentbyid:string='http://localhost/web/api/Student/DeleteStudent?id=';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getdata():Observable<IStudent[]>{
    return this.Http.get<IStudent[]>(this.getlist);
  }
  savestudent(student:IStudent):Observable<IStudent>{
    return this.Http.post<IStudent>(this.insertstudent,student,this.httpOptions);
  }
  getstudentbyid(id:number){
    return this.Http.get<IStudent>(this.getstudentid+id);
  }
  updatestud(student:IStudent):Observable<IStudent>{
    return this.Http.post<IStudent>(this.updatestudentbyid,student,this.httpOptions);
  }
  Deletestud(id:number){
    return this.Http.post<IStudent>(this.DeleteStudentbyid+id,this.httpOptions);
  }
}
