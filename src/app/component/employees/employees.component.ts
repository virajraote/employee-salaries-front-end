import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/Model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { PopupComponent } from '../popup/popup.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employeeList!: Employee[];
  dataSource: any;
  displayedColumns: string[] = [
    'id',
    'name',
    'department',
    'age',
    'workDays',
    'salaryPerDay',
    'salaryPerMonth',
    'action'
  ];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private service: EmployeeService, private dialog: MatDialog) {
    this.loadEmployee();

  }

  loadEmployee(){
    this.service.getEmployees().subscribe(res => {
      this.employeeList = res;
      this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  FilterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editEmployee(id:number){
    this.openPopup(id, 'Edit Employee', PopupComponent);
  }

  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.loadEmployee();
    })
  }

  employeeDetails(id:number){
    this.openPopup(id, 'Employee Details', EmployeeDetailsComponent);
  }

  addEmployee(){
    this.openPopup(0, 'Add Employee', PopupComponent);
  }

  openPopup(id:any, title:any, component:any){
    var _popup = this.dialog.open(component,{
      width: '40%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration: '1000ms',
      data:{
        title: title,
        id: id
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item);
      this.loadEmployee();
    })
  }


}
