import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'start-detail',
    loadChildren: () => import('./start-detail/start-detail.module').then( m => m.StartDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
