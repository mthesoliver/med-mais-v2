import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { IonicModule, LoadingController } from '@ionic/angular';

import { GenericValidator } from 'src/app/common/validator';
import { UserResponsavel } from 'src/app/models/user-responsavel';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
  standalone: true,
  animations: [
    trigger('moveDown', [
      state('up', style({ 'margin-top': '0' })),
      state('down', style({ 'margin-top': '4em' })),
      transition('up <=> down', animate('300ms')),
    ]),],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    IonicModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule
  ],
  providers: [
    provideNgxMask(), HttpClient
  ],
})
export class CadastroFormComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  selectedDate: Date = new Date();
  user: UserResponsavel = new UserResponsavel();
  buttonState = 'up'; // Inicialmente, o botão está na posição superior

  registerForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email])
    ],
    cpf: [null, Validators.compose([
      Validators.required, GenericValidator.isValidCpf(), Validators.maxLength(11)])
    ],
    nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
    dataNascimento: [null, Validators.required],
    telefone: [null, Validators.required],
    password: [null, Validators.required],
    passwordValid: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private route: Router, public loadingCtrl:LoadingController, public authService:AuthenticationService) { }

  ngOnInit() { 
    this.registerForm.get('passwordValid')?.setValidators([Validators.required, this.passwordMatchValidator.bind(this)]);

  }

  passwordMatchValidator(control: FormControl): { [key: string]: boolean } | null {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  onSubmit(): void {
    this.buttonState = 'down';
    if (this.registerForm.valid) {
      console.log(this.user);
      };
    };
    
    async registroUser(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      if(this.registerForm?.valid){
        const user = await this.authService.registerUser(this.registerForm.value.email!, this.registerForm.value.password!).catch((error)=>{
          console.log(error);
          loading.dismiss();
        })

        if(user){
          loading.dismiss();
          this.route.navigate(['/add-pessoas']);
        }else{
          console.log("Informações inválidas");
        }
      }
    }


  }
  

