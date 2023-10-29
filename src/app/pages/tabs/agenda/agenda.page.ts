import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

}
