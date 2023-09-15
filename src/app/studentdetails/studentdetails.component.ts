import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Student } from '../models/student'

@Component({
  selector: 'Finn-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  MyStudent: Student = new Student()
  constructor (private route: ActivatedRoute, private apiCaller: HttpClient) {}

  ngOnInit () {
    this.route.params.subscribe(params => {
      console.log(params['id'])

      this.apiCaller
        .get<Student>(
          'https://jsonplaceholder.typicode.com/users/' + params['id']
        )
        .subscribe(data => {
          this.MyStudent.id = data.id
          this.MyStudent.name = data.name
          this.MyStudent.email = data.email
        })
    }) 
  }
}
