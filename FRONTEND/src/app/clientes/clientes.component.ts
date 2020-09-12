import { ClientesService } from './clientes.service';

import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  cliente: String = "";

  constructor(private clienteService: ClientesService) {


  }

  ngOnInit(): void {

    this.clienteService.listarClientes().subscribe((clientes) => {

      console.log(clientes.clients[0].name);

      this.clientes = clientes.clients;

    })

  }

}
