import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFeedPageRoutingModule } from './home-feed-routing.module';

import { HomeFeedPage } from './home-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFeedPageRoutingModule
  ],
  declarations: [HomeFeedPage]
})
export class HomeFeedPageModule {}
