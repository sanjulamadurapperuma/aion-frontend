import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeService } from './employee.service';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FallbackComponent,
    ShouldLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule.forRoot(),
    RouterModule.forRoot([
    { path: '', redirectTo: 'basics/home', pathMatch: 'full' },
    // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
    { path: 'basics', loadChildren: () => import('./feature-basics/basics.module').then(m => m.BasicsModule) },
    { path: 'extras', loadChildren: () => import('./feature-extras/extras.module').then(m => m.ExtrasModule) },
    { path: 'should-login', component: ShouldLoginComponent },
    { path: '**', component: FallbackComponent },
], {})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
