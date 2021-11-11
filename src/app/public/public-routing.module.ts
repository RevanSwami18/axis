import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseInitiationComponent } from './components/case-initiation/case-initiation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { LoginComponent } from './components/login/login.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { ScrutinyComponent } from './components/scrutiny/scrutiny.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path:'forgot-password' , component:ForgotPasswordComponent},
  {path:'caseInitiation' , component:CaseInitiationComponent},
  {path:'scrutiny' , component:ScrutinyComponent},
  {path:'rolelist' , component:RoleListComponent},
  {path:'roleform' , component:RoleFormComponent},
  {path:'usercr' , component:UserCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
