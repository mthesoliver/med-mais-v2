import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicos } from 'src/app/models/medicos';
import { ListarMedicosService } from 'src/app/services/listar-medicos.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.page.html',
  styleUrls: ['./exames.page.scss'],
})
export class ExamesPage implements OnInit {

  medicos: Observable<Medicos[]>;
  displayedColumns= ['nomeMedico'];

  constructor(private medserv:ListarMedicosService) { 
    this.medicos = this.medserv.listarMedicosExams("/todos")
  }


  ngOnInit() {
  }

}
