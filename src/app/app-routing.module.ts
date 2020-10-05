import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordComponent } from './accord/accord.component';

import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'accod',
    component: AccordComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
