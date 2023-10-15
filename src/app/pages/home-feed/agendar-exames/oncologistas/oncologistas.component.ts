import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-oncologistas',
  templateUrl: './oncologistas.component.html',
  styleUrls: ['./oncologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule
  ]
})
export class OncologistasComponent  implements OnInit {

  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Oncologista")
  }

  ngOnInit() {}

}
