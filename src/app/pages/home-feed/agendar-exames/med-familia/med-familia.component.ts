import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-med-familia',
  templateUrl: './med-familia.component.html',
  styleUrls: ['./med-familia.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule
  ]
})
export class MedFamiliaComponent  implements OnInit {

  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Médico da Familia")
  }


  ngOnInit() {}

}
