import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
@Output() closeModal = new EventEmitter();
  ngOnInit() {

  }
  
  isClosedFunc(closed: boolean) {
    this.closeModal.emit(closed);
  }
  

}