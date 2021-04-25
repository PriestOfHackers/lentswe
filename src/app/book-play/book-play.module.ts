import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPlayPageRoutingModule } from './book-play-routing.module';

import { BookPlayPage } from './book-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPlayPageRoutingModule
  ],
  declarations: [BookPlayPage]
})
export class BookPlayPageModule {}
