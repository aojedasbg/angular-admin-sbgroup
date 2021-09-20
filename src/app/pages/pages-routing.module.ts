import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';
import { EditUserModule } from './edit-user/edit-user.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'new-user',
        loadChildren: () =>
          import('./new-user/new-user.module').then((m) => m.NewUserModule),
      },
      {
        path: 'edit-user/:id',
        loadChildren: () =>
          import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
