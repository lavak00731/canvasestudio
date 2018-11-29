import { Component, OnInit } from '@angular/core';
import { FormDataType } from './../form-data-type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  name;
  email;
  msg;
  subject;

  dataModel = new FormDataType(this.name, this.email, this.msg, this.subject);
  constructor() { }

  ngOnInit() {

  }

}
