import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { MyCalendarComponent } from './pages/home-feed/agendar-exames/calendar/mycalendar.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/cadastrar/cadastrar.module').then(m => m.CadastrarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-idoso',
    loadChildren: () => import('./pages/login-idoso/login-idoso.module').then(m => m.LoginIdosoPageModule)
  },
  {
    path: 'add-pessoas',
    loadChildren: () => import('./pages/add-pessoas/add-pessoas.module').then(m => m.AddPessoasPageModule)
  },
  {
    path: 'home-feed',
    loadChildren: () => import('./pages/home-feed/home-feed.module').then(m => m.HomeFeedPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [AuthGuard]
    
  },
  {
    path: 'calendar',
    component: MyCalendarComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  
  {
    path: 'avaliacao',
    component: AvaliacaoComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
