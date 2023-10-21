import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../models/medicos';
import { first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarMedicosService {

  private readonly springAPI = "medicos";

  constructor(private http: HttpClient) { }

  listarTodasEspecialidades(a:string){
    return this.http.get<Medicos[]>(this.springAPI + a).pipe(first());
}

listarTodoMedicos(a:string){
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(first());
}

listarMedicosExams(a:string){
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(map(medicos => medicos.slice(0, 3)));
}

}
