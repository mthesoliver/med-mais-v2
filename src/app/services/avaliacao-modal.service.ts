import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AvaliacaoComponent } from '../components/avaliacao/avaliacao.component';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoModalService {
  private modalExibido = false;

  constructor(private modalController: ModalController) {}

  async exibirAvaliacaoModal() {
    if (!this.modalExibido) {
      const modal = await this.modalController.create({
        component: AvaliacaoComponent,
        cssClass: 'avaliacao-modal',
      });

      await modal.present();
      this.modalExibido = true;
    }
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
