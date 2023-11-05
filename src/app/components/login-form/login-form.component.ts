import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { IonicModule, LoadingController } from '@ionic/angular';

import { UserResponsavel } from 'src/app/models/user-responsavel';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgIf,
    MatFormFieldModule,
    MatButtonModule, 
    MatIconModule,
    IonicModule,
    HttpClientModule,
  ],
  providers:[HttpClient]
})
export class LoginFormComponent{

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  user: UserResponsavel = new UserResponsavel();

  loginForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email])
    ],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private route: Router, public loadingCtrl:LoadingController, public authService:AuthenticationService) { }


onSubmit(): void {
      console.log(this.user);
      this.route.navigate(['/home-feed']);
  };

  async loginUser(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!).catch((error)=>{
        console.log(error);
        loading.dismiss();
      })

      if(user){
        loading.dismiss();
        this.route.navigate(['tabs/home-feed']);
      }else{
        console.log("Informações inválidas");
      }
    }
  }

  goToReset(){
    this.route.navigate(['/reset-password']);
  }


}