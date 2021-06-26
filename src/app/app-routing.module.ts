import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>  import('./welcome/welcome.module').then(m => m.WelcomePageModule )
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule )
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryPageModule )
  },
  {
    path: 'book-summary',
    loadChildren: () => import('./book-summary/book-summary.module').then(m => m.BookSummaryPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'book-summary',
    loadChildren: () => import('./book-summary/book-summary.module').then( m => m.BookSummaryPageModule)
  },
  {
    path: 'book-play',
    loadChildren: () => import('./book-play/book-play.module').then( m => m.BookPlayPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
