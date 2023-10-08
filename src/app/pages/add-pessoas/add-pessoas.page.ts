import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms'; // Importe as classes necessárias



@Component({
  selector: 'app-add-pessoas',
  templateUrl: './add-pessoas.page.html',
  styleUrls: ['./add-pessoas.page.scss'],
})
export class AddPessoasPage implements OnInit {

  // Crie um FormArray para armazenar os campos de e-mail adicionais
  emailFormArray: FormArray;
  maxEmails = 3;

  constructor(private formBuilder: FormBuilder) {
    this.emailFormArray = this.formBuilder.array([this.createEmailControl()]);
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  emailOptional = new FormControl(null, [Validators.email]);

  ngOnInit() {
  }

  // Função para criar um novo FormControl para o campo de e-mail
  createEmailControl(): FormControl {
    return this.formBuilder.control('', [Validators.email]);
  }

  // Função para adicionar um novo campo de e-mail ao FormArray
  addPessoa() {
    if (this.emailFormArray.length < this.maxEmails) {
      this.emailFormArray.push(this.createEmailControl());
    }
  }

  removePessoa(index: number) {
    this.emailFormArray.removeAt(index);
  }

  isAddButtonDisabled() {
    if (this.emailFormArray.length >= this.maxEmails) {
      document.getElementById("addPessoa")?.setAttribute('disabled', '');
    }else{
      document.getElementById("addPessoa")?.removeAttribute('disabled');
    }
  }

}
