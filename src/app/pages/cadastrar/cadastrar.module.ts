import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPageRoutingModule } from './cadastrar-routing.module';

import { CadastrarPage } from './cadastrar.page';
import { CadastroFormComponent } from 'src/app/components/cadastro-form/cadastro-form.component';
import { CadastroFormIdosoComponent } from 'src/app/components/cadastro-form-idoso/cadastro-form-idoso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarPageRoutingModule,
    CadastroFormComponent,
    CadastroFormIdosoComponent
  ],
  declarations: [CadastrarPage]
})
export class CadastrarPageModule {}
