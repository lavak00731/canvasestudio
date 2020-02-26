import { Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import { FormDataType } from './../form-data-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  formTarget = "./contacto.php";
  errorMessage;
  response;
  loading = false;
    
 @Input() subjectData: string;
  
  dataModel = new FormDataType(this.name, this.email, this.msg, this.subject); 
  submited = false;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    
  }
  ngOnChanges() {
    this.dataModel.subject = this.subjectData;   
  }
  resetForm(contactForm) {
    this.isSubmitted = false;
    this.response = false;
    setTimeout(function(){
      contactForm.reset();   
    }, 1000)
     
  }
  tryAgain() {
    this.isSubmitted = false;
    this.errorMessage = false;
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', }), responseType: 'text' as 'json' };
  onSubmit() {
    this.isSubmitted = true;
    this.loading = true;
    this.http.post(this.formTarget, 'name='+this.dataModel.name+'&email='+this.dataModel.email+'&msg='+this.dataModel.msg+'&subject='+this.dataModel.subject, this.httpOptions).subscribe(
      (response) => {
          this.loading = false;
          this.response = response;
          },
      (error) => {
              this.loading = false;
              this.errorMessage = error.message; 
             console.log(this.errorMessage)
          });
  }

  
}
