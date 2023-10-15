import { ArticleOpenComponent } from './feed-article-open/article-open/article-open.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFeedPage } from './home-feed.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFeedPage,
  },
  {
    path: 'caminhada-matinal', // Defina a rota para o seu componente
    component: ArticleOpenComponent,
  },
  {
    path: 'contato', // Defina a rota para o seu componente
    loadChildren:()=> import('../tabs/contato/contato.module').then(m => m.ContatoPageModule)
  },
  {
    path: 'eventos-favoritos',
    loadChildren: () => import('./eventos-favoritos/eventos-favoritos.module').then( m => m.EventosFavoritosPageModule)
  },
  {
    path: 'remedios-alarmes',
    loadChildren: () => import('./remedios-alarmes/remedios-alarmes.module').then( m => m.RemediosAlarmesPageModule)
  },
  {
    path: 'agendar-exames',
    loadChildren: () => import('./agendar-exames/agendar-exames.module').then( m => m.AgendarExamesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFeedPageRoutingModule {}
