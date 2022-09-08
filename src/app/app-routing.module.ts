import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Dünya Geneli Covid19 Verileri',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'tables',
    title: 'Ülkeler Geneli Covid19 Verileri',
    loadChildren: () =>
      import('./modules/table-list/table-list.module').then(
        (m) => m.TableListModule
      ),
  },
  {
    //Wild Card Route for 404 request
    path: '**',
    pathMatch: 'full',
    title: 'Sayfa Bulunamadı',
    component: NotFoundComponent,
  },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
