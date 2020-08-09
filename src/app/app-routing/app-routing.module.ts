import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import {AccountComponent} from '../account/account.component';
import {BannerComponent} from '../banner/banner.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'main',
    component: BannerComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
