import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDados() {
    return this.http.get('http://localhost:3000/users');
    // return this.http.get('https://clients-back.onrender.com/users');
  }
}
