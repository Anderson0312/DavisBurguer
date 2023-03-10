import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    loadChildren: () => import('./pages/cardapio/cardapio.module').then( m => m.CardapioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./pages/sobre-nos/sobre-nos.module').then( m => m.SobreNosPageModule)
  },
  {
    path: 'info-protudos',
    loadChildren: () => import('./pages/info-protudos/info-protudos.module').then( m => m.InfoProtudosPageModule)
  },
  {
    path: 'cupoens',
    loadChildren: () => import('./pages/cupoens/cupoens.module').then( m => m.CupoensPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categorias/:id',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
