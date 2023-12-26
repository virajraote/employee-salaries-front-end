import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  inputData: any;
  editData: any;
  closeMessage= 'closed using directive';

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<PopupComponent>,
  private builder: FormBuilder,
  private service: EmployeeService){

  }

  ngOnInit(): void {
    this.inputData = this.data;
    if(this.inputData.id>0){
      this.setPopupData(this.inputData.id)
    }
  }

  setPopupData(id:any){
    this.service.getEmployeeById(id).subscribe(item => {
      this.editData = item;
      this.myForm.setValue({
        name:this.editData.name,
        department:this.editData.department,
        age:this.editData.age,
        workDays:this.editData.workDays,
        salaryPerDay:this.editData.salaryPerDay,
      })
    });
  }


  closePopup(){
    this.ref.close('Closed using function');
  }

  myForm = this.builder.group({
    name: this.builder.control(''),
    department: this.builder.control(''),
    age: this.builder.control(''),
    workDays: this.builder.control(''),
    salaryPerDay: this.builder.control('')
  });

  saveEmployee(){
    this.service.saveEmployee(this.myForm.value).subscribe(res => {
      this.closePopup();
    });
  }

}
