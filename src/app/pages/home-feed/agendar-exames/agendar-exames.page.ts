import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-exames',
  templateUrl: './agendar-exames.page.html',
  styleUrls: ['./agendar-exames.page.scss'],
})
export class AgendarExamesPage implements OnInit {

  constructor() { 
  }
  

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

}
