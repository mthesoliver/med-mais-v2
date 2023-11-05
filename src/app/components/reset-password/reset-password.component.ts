import { NgIf } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { IonicModule, LoadingController } from '@ionic/angular';
import { UserResponsavel } from 'src/app/models/user-responsavel';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
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
export class ResetPasswordComponent  implements OnInit {

  email : any
  user: UserResponsavel = new UserResponsavel();

  loginForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email])
    ]
  });

  constructor(private fb: FormBuilder, private route: Router, public loadingCtrl:LoadingController, public authService:AuthenticationService) { }

  ngOnInit() {}

  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>
    this.route.navigate(["/login"])
    ).catch((error)=>
    console.log(error))
  }

}
