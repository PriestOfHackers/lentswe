import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPlayPage } from './book-play.page';

const routes: Routes = [
  {
    path: '',
    component: BookPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPlayPageRoutingModule {}
