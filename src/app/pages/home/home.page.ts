import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onClick(target: string){
    if(target === 'login'){
    this.route.navigate(['/login'])
    } 
    else if(target === 'cadastrar'){
      this.route.navigate(['/cadastrar'])
    } 
    else if(target === 'login-idoso'){
      this.route.navigate(['/login-idoso'])
    }
  }

}
