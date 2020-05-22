import {
  Component, 
  OnInit, 
  AfterViewInit, 
  // ViewChild, 
  // ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sentMessage:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    form.resetForm();
  }
}
