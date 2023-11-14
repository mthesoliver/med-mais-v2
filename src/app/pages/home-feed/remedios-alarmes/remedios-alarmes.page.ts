import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns/fp';


@Component({
  selector: 'app-remedios-alarmes',
  templateUrl: './remedios-alarmes.page.html',
  styleUrls: ['./remedios-alarmes.page.scss'],
})
export class RemediosAlarmesPage implements OnInit {

  @ViewChild('modal') modal!: IonModal;

  alarmes: any[] = [
    { time: '13:00', alarmeAtivado: true, remedio: 'Seu remédio 1' },
    { time: '13:10', alarmeAtivado: false, remedio: 'Seu remédio 2' },
    { time: '16:00', alarmeAtivado: false, remedio: 'Seu remédio 3' },
    { time: '16:10', alarmeAtivado: true, remedio: 'Seu remédio 4' },
  ];

  newAlarm: any = {
    time:'',
    alarmeAtivado:'',
    remedio:''
  };
  

  showStart:boolean=false
  showEnd:boolean=false
  formattedStart='';
  formattedEnd='';
  

  constructor() { }

  

  ngOnInit() {
  }

  getOrderedDivs() {
    // Reordena a lista para que os itens com toggleStatus true apareçam primeiro.
    return this.alarmes.sort((a, b) => {
      if (a.alarmeAtivado && !b.alarmeAtivado) return -1;
      if (!a.alarmeAtivado && b.alarmeAtivado) return 1;
      return 0;
    });
  }

  startChanged(value:any){
    this.newAlarm.time = value;    
    this.formattedStart = format(' HH:mm', parseISO(value));
  }

  remedioChanged(event: any) {
    this.newAlarm.remedio = event.target.value;
  }

  addAlarm(){
    const toAdd = {
      time:this.newAlarm.time,
      alarmeAtivado:true,
      remedio:this.newAlarm.remedio
    };
    console.log(toAdd);

    this.alarmes.push(toAdd);
    this.modal.dismiss();
  }
}
