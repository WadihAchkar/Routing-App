import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Finn-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  AllStudents: Student[] = [];

  constructor( private apiCaller: HttpClient) {
  }

  ngOnInit() {
    this.apiCaller.get<Student[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      for (const d of (data as any)) {
        this.AllStudents.push({
          name: d.name,
          id: d.id,
          email: d.email
        });
      }
    });
  }

}