import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-idoso',
  templateUrl: './login-idoso.page.html',
  styleUrls: ['./login-idoso.page.scss'],
})
export class LoginIdosoPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.route.navigate(['tabs/home-feed']);
    }

}
