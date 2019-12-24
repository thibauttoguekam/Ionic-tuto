import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartDetailPageRoutingModule } from './start-detail-routing.module';

import { StartDetailPage } from './start-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartDetailPageRoutingModule
  ],
  declarations: [StartDetailPage]
})
export class StartDetailPageModule {}
