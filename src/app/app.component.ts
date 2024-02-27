import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dados:any=[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getDados().subscribe((res: any) => {
      console.log('res...', res)
      this.dados = res;
    });
  }
}

