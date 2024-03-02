import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  styleUrls: []
})
export class ItemsComponent implements OnInit {

  items: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.items = clients;
    });
  }
}

