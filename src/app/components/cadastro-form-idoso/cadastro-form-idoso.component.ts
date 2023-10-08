import { UserIdoso } from './../../models/user-idoso';
import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { IonicModule } from '@ionic/angular';

import { GenericValidator } from 'src/app/common/validator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-form-idoso',
  templateUrl: './cadastro-form-idoso.component.html',
  styleUrls: ['./cadastro-form-idoso.component.scss'],
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
    FormsModule,
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
  ],
  providers: [provideNgxMask()],
})

export class CadastroFormIdosoComponent  implements OnInit {

  buttonState = 'up'; // Inicialmente, o botão está na posição superior

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() { }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  selectedDate: Date = new Date();
  user: UserIdoso = new UserIdoso();

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  registerForm = this.fb.group({
    cpf: [null, Validators.compose([
      Validators.required, GenericValidator.isValidCpf(), Validators.maxLength(11)])
    ],
    nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
    dataNascimento: [null, Validators.required],
    telefone: [null, Validators.required],
  });

  onSubmit(): void {
    this.buttonState = 'down';
    if (this.registerForm.valid) {
    if (this.registerForm.controls['nome'].value)
      this.user.nome = this.registerForm.controls['nome'].value;
    if (this.registerForm.controls['telefone'].value)
      this.user.telefone = this.registerForm.controls['telefone'].value;
    if (this.registerForm.controls['cpf'].value)
      this.user.cpf = this.registerForm.controls['cpf'].value;
    if (this.registerForm.controls['dataNascimento'].value)
    this.user.dataNascimento = this.registerForm.controls['dataNascimento'].value;
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.route.navigate(['login-idoso']);
    }
}

}
