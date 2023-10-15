import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-endocrinologistas',
  templateUrl: './endocrinologistas.component.html',
  styleUrls: ['./endocrinologistas.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
    MatTableModule
  ]
})
export class EndocrinologistasComponent  implements OnInit {

  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico', 'actions'];

  constructor(private medserv:ListarMedicosService) { 
    this.medicos = this.medserv.listarTodasEspecialidades("/especialidade?especialidade=Endocrinologista")
  }

  ngOnInit() {}

}
