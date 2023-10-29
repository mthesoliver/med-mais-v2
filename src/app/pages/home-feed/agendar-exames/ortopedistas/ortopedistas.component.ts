import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-ortopedistas',
  templateUrl: './ortopedistas.component.html',
  styleUrls: ['./ortopedistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule
  ]
})
export class OrtopedistasComponent  implements OnInit {

  loadingData: boolean = false;
  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Ortopedista")
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

}
