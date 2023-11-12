import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; 

const STORAGE_KEY = 'myevents';

export interface CalEvent{
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create();
  }

  async getData(){
    return await this.storage.get(STORAGE_KEY)|| [];
  }

  async addData(item:CalEvent){
    const data = await this.getData();
    data.push(item);
    return this.storage.set(STORAGE_KEY, data);
  }

  async deleteData(index: number) {
    const data = await this.getData();
    
    // Remove o evento do array de dados armazenados usando a posição
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      
      // Atualiza os dados no Ionic Storage
      await this.storage.set('myevents', data);
      console.log('Dados deletados com sucesso!');
    } else {
      console.error('Índice inválido para remoção de dados.');
    }
  }

  async delete(){
    return await this.storage.clear();
  }

}
