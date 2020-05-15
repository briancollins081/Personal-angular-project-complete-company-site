import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private pageCount:number = 4;
  constructor(private _http: HttpClient) { }

  fetchAllPosts() {
    return this._http.get<any>(`${API_URL}/content/posts/?offset=0&limit=0`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
  fetchAllPostsPagination(offsetZeroBased: number, limit: number) {
    offsetZeroBased = offsetZeroBased * this.pageCount;
    return this._http.get<any>(`${API_URL}/content/posts/?offset=${offsetZeroBased}&limit=${limit}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  fetchPost(id: string) {
    return this._http.get<any>(`${API_URL}/content/posts/single/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}
