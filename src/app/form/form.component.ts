import { Component, OnInit, Input, OnChanges} from '@angular/core';
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
  
 @Input() subjectData: string;
  
  dataModel = new FormDataType(this.name, this.email, this.msg, this.subject);
  submited = false;
  constructor() { }
  
  ngOnInit() {}
  ngOnChanges() {
    this.dataModel.subject = this.subjectData;   
  }
  
  onSubmit() {
    console.log(this.dataModel);
    
  }
}
