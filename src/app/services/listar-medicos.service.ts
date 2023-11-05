import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../models/medicos';
import { BehaviorSubject, catchError, finalize, first, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ListarMedicosService {

  loadingData: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly springAPI = environment.springAPI;
  //private readonly springAPI = "http://localhost:5000/medicos"

  constructor(private http: HttpClient, private alertController: AlertController) { }

  listarTodasEspecialidades(a:string){
    this.loadingData.next(true);
    return this.http.get<Medicos[]>(this.springAPI + a).pipe(first(),
    catchError((error: any) => {
      // Trate o erro aqui, você pode exibir uma mensagem de erro ou fazer o que for necessário.
      console.error('Erro ao buscar dados da API:', error);
      this.mostrarAlerta('Erro', 'Ocorreu um erro no nosso servidor. Tente novamente mais tarde.');
      // Aqui você pode exibir uma mensagem de erro ou lançar um erro personalizado.
      return throwError('Erro ao buscar dados da API');
    }),
    finalize(() => this.loadingData.next(false)));
  }

listarTodoMedicos(a:string){
  this.loadingData.next(true);
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(first(),
  finalize(() => this.loadingData.next(false)));
}

listarMedicosExams(a:string){
  return this.http.get<Medicos[]>(this.springAPI + a).pipe(map(medicos => {
  this.loadingData.next(false);
    return medicos.slice(0, 3)}),
    catchError((error: any) => {
      // Trate o erro aqui, você pode exibir uma mensagem de erro ou fazer o que for necessário.
      console.error('Erro ao buscar dados da API:', error);
      this.mostrarAlerta('Erro', 'Ocorreu um erro no nosso servidor. Tente novamente mais tarde.');
      // Aqui você pode exibir uma mensagem de erro ou lançar um erro personalizado.
      return throwError('Erro ao buscar dados da API');
    }),
    finalize(() => this.loadingData.next(true)));
}

async mostrarAlerta(titulo: string, mensagem: string) {
  const alert = await this.alertController.create({
    header: titulo,
    message: mensagem,
    buttons: ['OK']
  });

  await alert.present();
}

}
