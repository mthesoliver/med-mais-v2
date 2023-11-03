import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';
import { MyCalendarComponent } from '../calendar/mycalendar.component';

@Component({
  selector: 'app-reumatologistas',
  templateUrl: './reumatologistas.component.html',
  styleUrls: ['./reumatologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule,
    MyCalendarComponent
  ]
})
export class ReumatologistasComponent  implements OnInit {

  loadingData: boolean = false;
  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService, private router:Router) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Reumatologista")
  }

  ngOnInit() {
    this.medserv.loadingData.subscribe((carregada) => {
      this.loadingData = carregada;
    });
}

handleRefresh(event:any) {
  setTimeout(() => {
    this.ngOnInit();
    event.target.complete();
  }, 1000);
}

navigateCalendar() {
  this.router.navigate(['/calendar']);
}

isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
