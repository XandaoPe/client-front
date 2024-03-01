// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent implements OnInit {

//   dados: any=[];

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.http.get<any[]>('https://clients-back.onrender.com/users').subscribe(response => {
//       this.dados = response;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  styleUrls: []
})
export class ItemsComponent implements OnInit {
  items: any=[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  deleteItem(id: number) {
    this.apiService.deleteItem(id).subscribe(() => {
      this.getItems();
    });
  }
}

