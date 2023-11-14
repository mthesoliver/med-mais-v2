import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns/fp';
import { CalendarMode, NgCalendarModule , CalendarComponent} from 'ionic6-calendar';
import { CalEvent, CalendarioService } from 'src/app/services/calendario.service';

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
    endTime:''
  };
  
  showStart:boolean=false
  showEnd:boolean=false
  formattedStart='';
  formattedEnd='';

  constructor(private calService:CalendarioService, private modalController:ModalController) {
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
      title: this.newEvent.title,
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

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 40; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 1) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'Reservado - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 60) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Consulta - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }

}

