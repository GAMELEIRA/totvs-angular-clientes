import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  cliente: Cliente[] = [];

  constructor(private httpClient: HttpClient) { 
    
  }

  listarClientes(): Observable<Cliente[]> {

    return this.httpClient.get<Cliente[]>("localhost:9999/rest/wsfin677/clients");

  }

}
