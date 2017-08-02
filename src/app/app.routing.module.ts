import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { TasksFormComponent } from './components/tasks-form/tasks-form.component';


const appRoutes: Routes = [
  { path: ':identity/add', component: TasksFormComponent},
  { path: ':identity/edit/:id', component: TasksFormComponent},
  // { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  // { path: 'my-account', component: MyAccountComponent,canActivate: [AuthGuard]},
  { path: '*'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
