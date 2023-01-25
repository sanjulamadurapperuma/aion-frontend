import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-home',
  template: `<p class="alert alert-primary">
    You are currently at the <strong>🏠 HOME</strong> page.
  </p>
  <p *ngIf="!(isAuthenticated$ | async)" class="alert alert-dark">You need to be logged in to perform employee management operations.<br/>
  Please log in before continuing.</p>`,
})
export class HomeComponent implements OnInit {
  public apiResponse!: Observable<string>;
  public isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$
   }

  ngOnInit() {}

  public login($event: any) {
    $event.preventDefault();
    this.authService.login();
  }
}
