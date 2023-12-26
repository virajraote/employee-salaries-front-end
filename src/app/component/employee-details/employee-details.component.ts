import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  inputData: any;
  employeeData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private ref:MatDialogRef<EmployeeDetailsComponent>,
    private service: EmployeeService) {

  }

  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData.id > 0) {
      this.service.getEmployeeById(this.inputData.id).subscribe(item => {
        this.employeeData = item;
      });
    }
  }

  closePopup() {
    this.ref.close('closing from details');
  }


}
