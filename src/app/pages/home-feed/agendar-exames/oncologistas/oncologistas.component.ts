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
  selector: 'app-oncologistas',
  templateUrl: './oncologistas.component.html',
  styleUrls: ['./oncologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule,
    MyCalendarComponent
  ]
})
export class OncologistasComponent  implements OnInit {

  selectedMedico!: Medicos;
  loadingData: boolean = false;
  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService, private router:Router) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Oncologista")
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

setOpen(isOpen: boolean, medico: Medicos | null = null) {
  this.isModalOpen = isOpen;
  if (medico) {
    this.selectedMedico = medico;
  }
}

agendarMedico(medico: Medicos) {
  this.setOpen(true, medico);
}

}
