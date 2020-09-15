import { ClientsResponse } from './ClientsResponse';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientsResponse: ClientsResponse

  static contadorPaginacao: number = 1;

  constructor(private httpClient: HttpClient) { 
    
  }

  listarClientes(): Observable<ClientsResponse> {

    return this.httpClient.get<ClientsResponse>(`http://localhost:9999/rest/wsfin677/clients?page=${ClientesService.contadorPaginacao++}`);

  }

}
