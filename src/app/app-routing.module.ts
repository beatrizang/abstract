import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsingAbstractComponent } from './using-abstract/using-abstract.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ManageBillingComponent } from './manage-billing/manage-billing.component';
import { ManageOrganizationComponent } from './manage-organization/manage-organization.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'using-abstract',component:UsingAbstractComponent},
  {path:'manage-account',component:ManageAccountComponent},
  {path:'manage-billing',component:ManageBillingComponent},
  {path:'manage-organization',component:ManageOrganizationComponent},
  {path:'authenticate',component:AuthenticateComponent},
  {path:'support',component:SupportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
