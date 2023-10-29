import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../models/medicos';
import { BehaviorSubject, finalize, first, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarMedicosService {

  loadingData: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly springAPI = "/medicos";

  constructor(private http: HttpClient) { }

  listarTodasEspecialidades(a:string){
    this.loadingData.next(true);
    return this.http.get<Medicos[]>(this.springAPI + a).pipe(first(),finalize(() => this.loadingData.next(false)));
  }

listarTodoMedicos(a:string){
  this.loadingData.next(true);
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(first(),finalize(() => this.loadingData.next(false)));
}

listarMedicosExams(a:string){
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(map(medicos => {
    this.loadingData.next(true);
    return medicos.slice(0, 3)}));
}

}
