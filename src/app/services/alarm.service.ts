import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'myalarms';

export interface AlarmEvent {
  time: Date;
  alarmeAtivado: boolean;
  remedio: string;
  vezes: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlarmService {
  private isStorageReady = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
    this.isStorageReady = true;
  }

  async getData() {
    if (!this.isStorageReady) {
      await this.init();
    }
    return (await this.storage.get(STORAGE_KEY)) || [];
  }

  async addData(item: AlarmEvent) {
    if (!this.isStorageReady) {
      await this.init();
    }
    const data = await this.getData();
    data.push(item);
    return this.storage.set(STORAGE_KEY, data);
  }

  async deleteData(index: number) {
    if (!this.isStorageReady) {
      await this.init();
    }
    const data = await this.getData();
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      await this.storage.set(STORAGE_KEY, data);
      console.log('Dados deletados com sucesso!');
    } else {
      console.error('Índice inválido para remoção de dados.');
    }
  }

  async delete() {
    if (!this.isStorageReady) {
      await this.init();
    }
    return await this.storage.clear();
  }
}
