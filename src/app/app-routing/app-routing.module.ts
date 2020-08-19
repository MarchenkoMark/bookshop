import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { AccountComponent } from '../account/account.component';
import { BannerComponent } from '../banner/banner.component';
import { BookComponent } from '../book/book.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MerchComponent } from '../merch/merch.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'main',
    component: BannerComponent,
  },
  {
    path: 'merch',
    component: MerchComponent,
  },
  {
    path: 'merch/:id',
    component: BookComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
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

export const routingComponents = [
                                    AccountComponent,
                                    BannerComponent,
                                    MerchComponent,
                                    BookComponent,
                                    DashboardComponent,
                                    PageNotFoundComponent
                                  ]
