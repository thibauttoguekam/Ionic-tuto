import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start',
    children: [
        {
          path: '',
          loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
        },
        {
          path: ':id',
          loadChildren: () => import('./start/start-detail/start-detail.module').then( m => m.StartDetailPageModule)
        }

    ]

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
