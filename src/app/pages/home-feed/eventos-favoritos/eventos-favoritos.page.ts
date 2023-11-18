import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-favoritos',
  templateUrl: './eventos-favoritos.page.html',
  styleUrls: ['./eventos-favoritos.page.scss'],
})
export class EventosFavoritosPage implements OnInit {

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
