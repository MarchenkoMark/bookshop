import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCarouselModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MerchComponent } from './merch/merch.component';
import { ModalComponent } from './modal/modal.component';
import { AccountComponent } from './account/account.component';
import { TestService } from './test.service';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    MerchComponent,
    ModalComponent,
    AccountComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    IgxInputGroupModule,
    IgxIconModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}
