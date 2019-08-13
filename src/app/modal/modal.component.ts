import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  constructor() { }
 //modal closing
@Input() subj: string;
@Input() isClosed: boolean;
  ngOnInit() {}
  
  closeModal() {
    this.isClosed = true;
  }
}