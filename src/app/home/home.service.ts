import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  mailSentEmitter: any = new EventEmitter<boolean>();

  constructor(private _http:HttpClient) { }

  sendMail(data) {
    this._http.post<any>(`${API_URL}/mail/contact`, data, {
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
