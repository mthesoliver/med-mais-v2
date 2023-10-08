import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { GenericValidator } from 'src/app/common/validator';
import { UserIdoso } from 'src/app/models/user-idoso';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-idoso',
  templateUrl: './login-form-idoso.component.html',
  styleUrls: ['./login-form-idoso.component.scss'],
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
    NgxMaskPipe,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
})
export class LoginFormIdosoComponent  implements OnInit {

  hide = true;
  user: UserIdoso = new UserIdoso();

  constructor(private fb: FormBuilder, private route:Router) { }

  ngOnInit() {}

  
  registerForm = this.fb.group({
    cpf: [null, Validators.compose([
      Validators.required, GenericValidator.isValidCpf(), Validators.maxLength(11)])
    ],
    nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
  });

  onSubmit(): void {
    if (this.registerForm.controls['nome'].value)
      this.user.nome = this.registerForm.controls['nome'].value;
    if (this.registerForm.controls['cpf'].value)
      this.user.cpf = this.registerForm.controls['cpf'].value;
    console.log(this.user);
    this.route.navigate(['home-feed'])
  }
  

}
