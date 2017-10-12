import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewdetailComponent } from './viewdetail/viewdetail.component';

const routes: Routes = [
    { path: 'viewdetail/:id', component: ViewdetailComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }