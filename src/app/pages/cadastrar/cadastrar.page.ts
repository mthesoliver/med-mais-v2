import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage implements OnInit {

  type: string = 'responsavel';

  constructor(public route:Router) { }
  
  ngOnInit() {
  }

  onClick(){
    this.route.navigate(['/login'])
    }
  }


