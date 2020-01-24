import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
path: string;

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:8080/personas';
  }

  getPersonas() {

    return this.http.get<Persona[]>(this.path);
  }

  getPersonaUnica(id: number) {

    return this.http.get<Persona>(this.path + '/' + id);
  }

  createPersona(p: Persona) {

    return this.http.post<Persona>(this.path, p);
  }

  deletePersona(id: number) {

    return this.http.delete<Persona>(this.path + '/' + id);

  }

  updatePersona(p: Persona) {

    return this.http.put<Persona>(this.path + ' ' + p.id, p );
  }
}
