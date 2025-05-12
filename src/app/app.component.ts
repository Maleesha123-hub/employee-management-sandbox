import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  employeeForm: FormGroup | any;
  empList: Employee[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initEmpForm();
  }

  initEmpForm = () => {
    this.employeeForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      department: [''],
      salary: [''],
    });
  };

  createEmployee() {
    const empForm = this.employeeForm.value;
    const firstName = empForm.firstName;
    const lastName = empForm.lastName;
    const department = empForm.department;
    const salary = empForm.salary;

    const empObj: Employee = {
      firstName: firstName,
      lastName: lastName,
      department: department,
      salary: salary,
    };
    this.empList.push(empObj);
  }
}
