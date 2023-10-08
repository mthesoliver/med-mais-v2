import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPessoasPage } from './add-pessoas.page';

const routes: Routes = [
  {
    path: '',
    component: AddPessoasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPessoasPageRoutingModule {}
