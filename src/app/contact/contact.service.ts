import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

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
    this._http.post<any>(`${API_URL}`, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response'
    })
      .subscribe(
        response => {
          if(!response.ok){
            this.mailSentEmitter.emit(false);
          }
          this.mailSentEmitter.emit(true);
        },
        error => {
          this.mailSentEmitter.emit(false);
        });
  }
}
