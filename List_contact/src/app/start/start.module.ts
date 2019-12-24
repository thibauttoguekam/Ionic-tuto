import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {Http} from '@angular/http';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    StartPageRoutingModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
