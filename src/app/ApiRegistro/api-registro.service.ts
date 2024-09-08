import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../interfaz/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroService {
  url= "https://66c7e91e732bf1b79fa7be79.mockapi.io/obtenerpersonas/Personas"
  agregar_personas (persona:Personas){
    this.HTTP.post(this.url,persona)
    
  }

  constructor(private HTTP:HttpClient) { }

  obtener_persona (): Observable < any > {
    return this.HTTP.get < any > (this.url)
  }
}
