import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {

  client = {} as Client;
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  // defini se um clientro será criado ou atualizado
  saveClient(form: NgForm) {
    if (this.client._id !== undefined) {
      this.clientService.updateClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.clientService.saveClient(this.client).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os clientros
  getClients() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

  // deleta um clientro
  deleteClient(client: Client) {
    this.clientService.deleteClient(client).subscribe(() => {
      this.getClients();
    });
  }

  // copia o clientro para ser editado.
  editClient(client: Client) {
    this.client = { ...client };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getClients();
    form.resetForm();
    this.client = {} as Client;
  }


}



