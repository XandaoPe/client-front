import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dados: any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://clients-back.onrender.com/users').subscribe(response => {
      this.dados = response;
    });
  }
}
