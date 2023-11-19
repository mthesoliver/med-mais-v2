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

  //I have this array of objects and i want the time property converted to Date

  alarmes: any[] = [
    { time: '2021-05-21T15:00:00Z', alarmeAtivado: true, remedio: 'Escitalopram', vezes:'2 vezes' },
    { time: '2021-05-21T16:00:00Z', alarmeAtivado: false, remedio: 'Losartana',  vezes:'2 vezes' },
    { time: '2021-05-21T16:10:00Z', alarmeAtivado: false, remedio: 'Glifage',  vezes:'2 vezes' },
    { time: '2021-05-21T20:00:00Z', alarmeAtivado: true, remedio: 'Alprazolam', vezes:'2 vezes'  },
  ];

  
  newAlarm: any = {
    time:'',
    alarmeAtivado:'',
    remedio:'',
    vezes:''
  };

  showStart:boolean=false
  showEnd:boolean=false
  formattedStart='';
  formattedEnd='';
  

  constructor(private modalCtrl: ModalController) { }

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

  vezesChanged(event: any) {
    this.newAlarm.vezes = event.target.value;
  }

  addAlarm(){
    const toAdd = {
      time:this.newAlarm.time,
      alarmeAtivado:true,
      remedio:this.newAlarm.remedio,
      vezes: this.newAlarm.vezes
    };
    console.log(toAdd);

    this.alarmes.push(toAdd);
    this.modal.dismiss();
  }

  selectedAlarm: any = null;

  showAlarm(alarme: any){
    console.log('Alarm event triggered: ', alarme);
    this.selectedAlarm = alarme;
}

removeAlarm(alarme: any) {
  // Remove o alarme da lista
  const index = this.alarmes.findIndex(a => a === alarme);
  if (index !== -1) {
    this.alarmes.splice(index, 1);
  }

  // Fecha o modal
  this.selectedAlarm = null;
}
}
