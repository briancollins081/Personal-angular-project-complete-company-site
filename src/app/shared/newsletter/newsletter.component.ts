import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  subscriptionForm: FormGroup;
  isSent = false;
  isSending = false;
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.subscriptionForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }

  onSubscription() {
    // console.log(this.subscriptionForm.value);
    this.isSending = true;
    this._http.post(`${API_URL}/mail/newsletter`, this.subscriptionForm.value, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response'
    }).subscribe(
      res => {
        this.isSending = false;
        if(!res.ok){
          const err = new Error("Request failed!");
          throw err;
        }
        this.isSent = true;
      },
      err => {
        this.isSent = true;//*log an error
        this.isSending = false
      })
  }
}
