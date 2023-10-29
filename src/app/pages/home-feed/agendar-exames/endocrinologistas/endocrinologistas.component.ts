import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endocrinologistas',
  templateUrl: './endocrinologistas.component.html',
  styleUrls: ['./endocrinologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule,
    CommonModule
  ]
})
export class EndocrinologistasComponent  implements OnInit {
  
  loadingData: boolean = false;
  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService) { 
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

}
