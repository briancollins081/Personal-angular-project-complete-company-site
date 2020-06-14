import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  mailSentEmitter = new EventEmitter<boolean>();
  constructor(private _http: HttpClient) { }

  sendMail(data: {
    name: string,
    email: string,
    subject: string,
    number: string,
    reason: string,
    message: string
  }) {
    const message = {
      email: data.email,
      subject: data.subject,
      body: `<b>Sender phone number<b/>: ${data.number}<br/>
             <b>Reason<b/>: ${data.reason} <br/>
             <b>Sender name<b/>: ${data.name} <br/>
             <hr/>
             <b>Message<b/>: ${data.message} 
             `
    }
    // this._http.post<any>(`${API_URL}/mail/contact`, data, {
    this._http.post<any>(`https://afyarekod.com/api/user/comm/website/email`, message, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response'
    })
      .subscribe(
        response => {
          if (!response.ok) {
            this.mailSentEmitter.emit(false);
          }
          this.mailSentEmitter.emit(true);
        },
        error => {
          this.mailSentEmitter.emit(false);
        });
  }
}
