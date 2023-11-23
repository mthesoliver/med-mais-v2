import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';
import { CommonModule } from '@angular/common';
import { MyCalendarComponent } from '../calendar/mycalendar.component';

@Component({
  selector: 'app-endocrinologistas',
  templateUrl: './endocrinologistas.component.html',
  styleUrls: ['./endocrinologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule,
    MyCalendarComponent
  ]
})
export class EndocrinologistasComponent  implements OnInit {
  
  selectedMedico!: Medicos;
  loadingData: boolean = false;
  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService, private router: Router) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Endocrinologista")
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
