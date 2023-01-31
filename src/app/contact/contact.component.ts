import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  project!: string;
  interest!: string;
  details!: string;
  constructor() { }

  ngOnInit(): void {
  }
  textMe(): void {
    console.log(this.name);

    let email = ['emanshaltoot623@gmail.com'];
    let link =
      'mailto:' +
      email +
      '?subject=' +
      this.project +
      '&body=' +
      '   Name Is:  ' +
      this.name +
      '   From:  ' +
      this.email +
      ' Interest:' +
      this.interest +
      ' Details: ' +
      this.details;

    window.location.href = link;
  }
}
