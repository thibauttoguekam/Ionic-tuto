import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartDetailPage } from './start-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StartDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartDetailPageRoutingModule {}
