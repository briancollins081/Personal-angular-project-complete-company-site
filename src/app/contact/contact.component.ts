import {
  Component,
  OnInit,
  OnDestroy,
  // ViewChild, 
  // ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  successMessage: string = "";
  isSent = false;
  isLoading = false;
  mailSentSubscritpiton: Subscription;
  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.mailSentSubscritpiton = this.contactService.mailSentEmitter
      .subscribe(status => {
        this.isSent = status;
        this.isLoading = false;
        if (status) {
          this.successMessage = "Message sent successfully"
        } else {
          this.successMessage = "Message not sent at this time, please try again later or email us using <b>info@afyarekod.com<b>"
        }
      })
  }

  ngOnDestroy() {
    if (this.mailSentSubscritpiton) {
      this.mailSentSubscritpiton.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.isLoading = true;
    this.contactService.sendMail(form.value);
    // form.resetForm();
  }
}
