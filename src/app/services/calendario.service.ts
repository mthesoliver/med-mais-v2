import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; 

const STORAGE_KEY = 'myevents';

export interface CalEvent{
  title: string;
  startTime: string;
  endTime: string;
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
}
