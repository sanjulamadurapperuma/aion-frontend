import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuardWithForcedLogin } from './core/auth-guard-with-forced-login.service';
import { CoreModule } from './core/core.module';
import { EmployeeService } from './employee.service';
import { FallbackComponent } from './fallback.component';
import { Admin2Component } from './feature-extras/admin2.component';
import { SharedModule } from './shared/shared.module';
import { ShouldLoginComponent } from './should-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FallbackComponent,
    ShouldLoginComponent,
    Admin2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SharedModule,
    CoreModule.forRoot(),
    RouterModule.forRoot([
    { path: '', redirectTo: 'basics/home', pathMatch: 'full' },
    // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
    { path: 'basics', loadChildren: () => import('./feature-basics/basics.module').then(m => m.BasicsModule) },
    // { path: 'extras', loadChildren: () => import('./feature-extras/extras.module').then(m => m.ExtrasModule) },
    { path: 'should-login', component: ShouldLoginComponent },
    { path: 'extras/admin2', component: Admin2Component, canActivate: [AuthGuardWithForcedLogin] },
    { path: '**', component: FallbackComponent },
], {})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
