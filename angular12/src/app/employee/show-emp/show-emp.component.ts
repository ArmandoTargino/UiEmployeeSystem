import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  EmployeeIdFilter:string="";
  EmployeeFirstNameFilter:string="";
  DepartmentFilter:string="";
  EmployeeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }
  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeFirstName:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }
  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;
    });
  }

FilterFn(){
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeFirstNameFilter = this.EmployeeFirstNameFilter;
    var DepartmentFilter = this.DepartmentFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
        return el.EmployeeId.toString().toLowerCase().includes(
          EmployeeIdFilter.toString().trim().toLowerCase()
        )&&
        el.EmployeeFirstName.toString().toLowerCase().includes(
          EmployeeFirstNameFilter.toString().trim().toLowerCase()
        )&&
        el.Department.toString().toLowerCase().includes(
          DepartmentFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}





