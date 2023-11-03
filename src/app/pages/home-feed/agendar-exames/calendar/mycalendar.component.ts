import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonRouterOutlet, IonicModule } from '@ionic/angular';
import { CalendarMode, NgCalendarModule , CalendarComponent} from 'ionic6-calendar';
import { TabsPageModule } from 'src/app/pages/tabs/tabs.module';

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
    TabsPageModule
  ]
})
export class MyCalendarComponent  implements OnInit {

  time1 = { startTime:"10:00", endTime:"11:00"}
  time2 = { startTime:"12:00", endTime:"13:00"}
  time3 = { startTime:"14:00", endTime:"15:00"}
  time4 = { startTime:"17:00", endTime:"18:00"}


  calendar = {
    mode:'month' as CalendarMode,
    currentDate: new Date(),
  };
  viewTitle ='';
  eventSource: any[] = [];

  @ViewChild(CalendarComponent) myCal!: CalendarComponent;

  newEvent: any = {
    title:'',
    allDay:false,
    startTime:'',
    endTime:'',
  };

  constructor() { 
  }

  ngOnInit() {}

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

  scheduleEvent(){
    
  }

}

