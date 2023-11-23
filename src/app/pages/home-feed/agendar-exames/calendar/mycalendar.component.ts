import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonModal, IonicModule } from '@ionic/angular';
import { format, parseISO } from 'date-fns/fp';
import { CalendarMode, NgCalendarModule , CalendarComponent} from 'ionic6-calendar';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { CalEvent, CalendarioService } from 'src/app/services/calendario.service';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule,
    NgCalendarModule,
    FormsModule,
  ],
})
export class MyCalendarComponent implements OnInit {
  
  @Input() selectedMedico: Medicos | null = null;

  calendar = {
    mode:'month' as CalendarMode,
    currentDate: new Date(),
  };
  viewTitle ='';
  eventSource: any[] = [];

  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  @ViewChild('modal') modal!: IonModal;

  newEvent: any = {
    title:'Consulta',
    startTime:'',
    endTime:'',
  };
  
  showStart:boolean=false
  showEnd:boolean=false
  formattedStart='';
  formattedEnd='';

  constructor(private calService:CalendarioService, private medServ: ListarMedicosService) {
  }


  async ngOnInit() {
    this.eventSource = await this.calService.getData();
    //this.createRandomEvents();
    console.log(this.eventSource)
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

  calendarBack(){
    this.myCal.slidePrev();
  }

  calendarForward(){
    this.myCal.slideNext();
  }
  

  setToday(){
    this.myCal.currentDate = new Date();
  }

  addEvent(){
    const toAdd: CalEvent = {
      title: this.newEvent.title + ' ' + this.selectedMedico?.nomeMedico,
      startTime: new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime),
      allDay: false
    };
    console.log(toAdd);

    this.eventSource.push(toAdd);
    this.myCal.loadEvents();
    this.calService.addData(toAdd);

    this.newEvent = {
      title:'Consulta',
      allDay: false,
      startTime: null,
      endTime: null
    };

    this.modal.dismiss();
  }

  removeEvents(){
    this.eventSource = [];
    this.calService.delete();
  }

  onViewTitleChanged(title: string) {
    this.viewTitle = title;
  }

  onTimeSelected(ev: {selectedTime: Date; events: any[]}) {
    this.formattedStart = format('d MMM, HH:mm', ev.selectedTime);
    this.newEvent.startTime = format("yyy-MM-dd'T'HH:mm:ss", ev.selectedTime);

    const later = ev.selectedTime.setHours(ev.selectedTime.getHours() + 1)

    this.formattedEnd = format('d MMM, HH:mm', later);
    this.newEvent.endTime = format("yyy-MM-dd'T'HH:mm:ss", later);

    if(this.calendar.mode ==='day'){
      this.modal.present();
    }
  }

  startChanged(value:any){
    this.newEvent.startTime = value;    
    this.formattedStart = format('d MMM, HH:mm', parseISO(value));
  }

  endChanged(value:any){
    this.newEvent.endTime = value;    
    this.formattedEnd = format('d MMM, HH:mm', parseISO(value));  
  }

  onEventSelected(event: any){
    console.log(event);
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    return date < current;
};

removeEvent(eventToRemove: any) {
  const index = this.eventSource.indexOf(eventToRemove);
  confirm("Deseja mesmo desmarcar o exame?");
  if (confirm() === true) {
    if(index !== -1){
    this.eventSource.splice(index, 1);
    console.log('Evento removido com sucesso!');
    alert('Consulta desmarcada com sucesso!');
    }else{
      alert("Exame não cancelado")
    }
    this.calService.deleteData(index);
  } else {
    console.error('Evento não encontrado para remoção.');
  }
}

closeModal(){
  this.modal.dismiss('Cancelar');
}
}

