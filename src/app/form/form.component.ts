import { Component, OnInit } from '@angular/core';
import { FormDataType } from './../form-data-type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  dataModel = new FormDataType(this.name, this.email, this.msg, this.subject);
  constructor() { }

  ngOnInit() {
    console.log(this.dataModel);
  }

}
