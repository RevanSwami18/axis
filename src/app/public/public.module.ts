import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../core/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { CaseInitiationComponent } from './components/case-initiation/case-initiation.component';
import { ScrutinyComponent } from './components/scrutiny/scrutiny.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleFormComponent } from './components/role-form/role-form.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';


@NgModule({
  declarations: [
    PublicComponent,
    LayoutComponent,
    ListCardsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CaseInitiationComponent,
    ScrutinyComponent,
    RoleListComponent,
    RoleFormComponent,
    UserCreationComponent,
  ],
  imports: [
    CommonModule,ReactiveFormsModule,BrowserAnimationsModule,
    PublicRoutingModule,BrowserModule,MaterialModule,
    MatSidenavModule,FlexLayoutModule,RouterModule,FormsModule,

    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    
  ],
  exports: [
    PublicComponent,
    LayoutComponent
  ]
})
export class PublicModule { }
