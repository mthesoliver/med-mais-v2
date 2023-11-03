import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: "home-feed",
        loadChildren:()=> import('../home-feed/home-feed.module').then(m => m.HomeFeedPageModule)
      },
      {
        path: "profile",
        loadChildren:()=> import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: "contato",
        loadChildren:()=> import('./contato/contato.module').then(m => m.ContatoPageModule)
      },
      {
        path: "exames",
        loadChildren:()=> import('./exames/exames.module').then(m => m.ExamesPageModule)
      },
      {
        path: "agenda",
        loadChildren:()=> import('./agenda/agenda.module').then(m => m.AgendaPageModule)
      },
    ]
    
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
