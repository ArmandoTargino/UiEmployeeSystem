import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
 
  constructor(private service:SharedService) { }
 
  @Input() emp: any;
  EmployeeId:string;
  EmployeeFirstName:string;
  EmployeeLastName:string;
  EmployeeMiddleName:string;
  Department:string;
  DateOfJoining:string;
  StreetAddress:string;
  City:string;
  State:string;
  Country:string;
  ZipCode:string;
  Email:string;
  PhoneNumber:string;
  Salary:string;
  PhotoFileName:string;
  PhotoFilePath:string;
  DepartmentsList:any=[];
  
 

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeFirstName=this.emp.EmployeeFirstName;
      this.EmployeeLastName=this.emp.EmployeeLastName;
      this.EmployeeMiddleName=this.emp.EmployeeMiddleName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.StreetAddress=this.emp.StreetAddress;
      this.City=this.emp.City;
      this.State=this.emp.State;
      this.Country=this.emp.Country;
      this.ZipCode=this.emp.ZipCode;
      this.Email=this.emp.Email;
      this.PhoneNumber=this.emp.PhoneNumber;
      this.Salary=this.emp.Salary;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }


  addEmployee(){
    var val={
              EmployeeId:this.EmployeeId,
              EmployeeFirstName:this.EmployeeFirstName,
              EmployeeLastName:this.EmployeeLastName,
              EmployeeMiddleName:this.EmployeeMiddleName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              StreetAddress:this.StreetAddress,
              City:this.City,
              State:this.State,
              Country:this.Country,
              ZipCode:this.ZipCode,
              Email:this.Email,
              PhoneNumber:this.PhoneNumber,
              Salary:this.Salary,
              PhotoFileName:this.PhotoFileName
            };
            this.service.addEmployee(val).subscribe(res=>{
              alert(res.toString());
            });
  }
  updateEmployee(){
    var val={
              EmployeeId:this.EmployeeId,
              EmployeeFirstName:this.EmployeeFirstName,
              EmployeeLastName:this.EmployeeLastName,
              EmployeeMiddleName:this.EmployeeMiddleName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              StreetAddress:this.StreetAddress,
              City:this.City,
              State:this.State,
              Country:this.Country,
              ZipCode:this.ZipCode,
              Email:this.Email,
              PhoneNumber:this.PhoneNumber,
              Salary:this.Salary,
              PhotoFileName:this.PhotoFileName
            };
      this.service.updateEmployee(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}
