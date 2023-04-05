import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'jfhjh@dfg.com',
      phone: 94039,
      salary: 3403,
      department: 'Human Resources'
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'jfhjh@dfg.com',
      phone: 94039,
      salary: 3403,
      department: 'Human Resources'
    },
    {
      id: '3',
      name: 'John Doe',
      email: 'jfhjh@dfg.com',
      phone: 94039,
      salary: 3403,
      department: 'Human Resources'
    },
    {
      id: '4',
      name: 'John Doe',
      email: 'jfhjh@dfg.com',
      phone: 94039,
      salary: 3403,
      department: 'Human Resources'
    },
  ];
  constructor() { }

  ngOnInit(): void {



  }

}
