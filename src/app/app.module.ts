import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsingAbstractComponent } from './using-abstract/using-abstract.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ManageBillingComponent } from './manage-billing/manage-billing.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SupportComponent } from './support/support.component';
import { LegalComponent } from './legal/legal.component';
import { NavbarSimpleComponent } from './navbar-simple/navbar-simple.component';
import { FooterV2Component } from './footer-v2/footer-v2.component';
import { LegalAcceptableComponent } from './legal-acceptable/legal-acceptable.component';
import { LegalCopyComponent } from './legal-copy/legal-copy.component';
import { LegalTermsComponent } from './legal-terms/legal-terms.component';
import { LegalProcessingComponent } from './legal-processing/legal-processing.component';
import { LegalTransferComponent } from './legal-transfer/legal-transfer.component';
import { LegalTrademarksComponent } from './legal-trademarks/legal-trademarks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsingAbstractComponent,
    ManageAccountComponent,
    ManageBillingComponent,
    ManageOrganizationComponent,
    AuthenticateComponent,
    SupportComponent,
    LegalComponent,
    NavbarSimpleComponent,
    FooterV2Component,
    LegalAcceptableComponent,
    LegalCopyComponent,
    LegalTermsComponent,
    LegalProcessingComponent,
    LegalTransferComponent,
    LegalTrademarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
