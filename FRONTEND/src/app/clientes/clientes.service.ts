import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  data: Data;

  constructor(private httpClient: HttpClient) { 
    
  }

  listarClientes(): Observable<Data> {

    return this.httpClient.get<Data>("http://localhost:9999/rest/wsfin677/clients");

  }

}
