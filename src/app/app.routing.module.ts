import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component'

const appRoutes: Routes = [
  { path: ':identity', component: TasksListComponent, children: [
      { path: 'add', component:  TasksFormComponent},
      { path: ':id/edit', component: TasksFormComponent }
  ]},
  { path: '', component: TasksListComponent}
  // { path: 'my-account', component: MyAccountComponent,canActivate: [AuthGuard]},
  // { path: '*'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
