import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remedios-alarmes',
  templateUrl: './remedios-alarmes.page.html',
  styleUrls: ['./remedios-alarmes.page.scss'],
})
export class RemediosAlarmesPage implements OnInit {

  alarmes: any[] = [
    { time: '13:00', alarmeAtivado: true, remedio: 'Seu remédio 1' },
    { time: '13:10', alarmeAtivado: false, remedio: 'Seu remédio 2' },
    { time: '16:00', alarmeAtivado: false, remedio: 'Seu remédio 3' },
    { time: '16:10', alarmeAtivado: true, remedio: 'Seu remédio 4' },
  ];

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

}
