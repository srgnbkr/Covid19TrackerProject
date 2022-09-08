import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./modules/table-list/table-list.module').then(
        (m) => m.TableListModule
      ),
  },
  {
    //Wild Card Route for 404 request
    path: '**',
    pathMatch:'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
