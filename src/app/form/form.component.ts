import { Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import { FormDataType } from './../form-data-type';
import { HttpClient } from '@angular/common/http';


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
  isSubmitted = false;
  formTarget = "../../php-mailer/mailer.php";
  errorMessage;
  response;
  @ViewChild('contactForm', {
    static: false
}) contactForm: NgForm;
 @Input() subjectData: string;
  
  dataModel = new FormDataType(this.name, this.email, this.msg, this.subject);
  submited = false;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    
  }
  ngOnChanges() {
    this.dataModel.subject = this.subjectData;   
  }
  resetForm() {
    this.contactForm.reset();
  }
  tryAgain() {
    this.isSubmitted = false;
    this.errorMessage = false;
  }
  onSubmit() {
    this.isSubmitted = true;
    this.http.post(this.formTarget, this.dataModel).subscribe(
      (response) => {
          this.response = response;
          },
      (error) => {
              this.errorMessage = error.message; 
             
          });
  }

  
}
