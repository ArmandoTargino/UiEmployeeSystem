import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";
readonly PhotoUrl="https://localhost:5001/Photos/";
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/departments');
  }


  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/departments',val);
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/departments/'+val.DepartmentId,val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/departments/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employees');
  }


  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employees',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employees/'+val.EmployeeId,val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employees/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/employees/SaveFile',val);
  }
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employees/GetAllDepartmentNames');
  }


}
