import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsingAbstractComponent } from './using-abstract/using-abstract.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ManageBillingComponent } from './manage-billing/manage-billing.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SupportComponent } from './support/support.component';
import { LegalComponent } from './legal/legal.component';
import { LegalAcceptableComponent } from './legal-acceptable/legal-acceptable.component';
import { LegalCopyComponent } from './legal-copy/legal-copy.component';
import { LegalTermsComponent } from './legal-terms/legal-terms.component';
import { LegalTransferComponent } from './legal-transfer/legal-transfer.component';
import { LegalTrademarksComponent } from './legal-trademarks/legal-trademarks.component';
import { LegalProcessingComponent } from './legal-processing/legal-processing.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'using-abstract',component:UsingAbstractComponent},
  {path:'manage-account',component:ManageAccountComponent},
  {path:'manage-billing',component:ManageBillingComponent},
  {path:'manage-organization',component:ManageOrganizationComponent},
  {path:'authenticate',component:AuthenticateComponent},
  {path:'support',component:SupportComponent},
  {path:'legal',component:LegalComponent},
  {path:'legal-acceptable',component:LegalAcceptableComponent},
  {path:'legal-copy',component:LegalCopyComponent},
  {path:'legal-terms',component:LegalTermsComponent},
  {path:'legal-processing',component:LegalProcessingComponent},
  {path:'legal-transfer',component:LegalTransferComponent},
  {path:'legal-trademarks',component:LegalTrademarksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
