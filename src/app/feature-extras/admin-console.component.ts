import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: `./admin.component.html`,
})
export class AdminConsoleComponent implements OnInit {
  apiResponse!: Observable<string>;
  public isAuthenticated$: Observable<boolean>;
  public isDoneLoading$: Observable<boolean>;
  public canActivateProtectedRoutes$: Observable<boolean>;

  constructor(
    private authService: AuthService,
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ = this.authService.canActivateProtectedRoutes$;
  }

  ngOnInit() {}

  public login() { 
    this.authService.login(); 
  }
  
  public logout() { 
    this.authService.logout(); 
  }
  
  public refresh() { 
    this.authService.refresh(); 
  }
  
  public reload() { 
    window.location.reload(); 
  }
  
  public clearStorage() { 
    localStorage.clear(); 
  }

  public logoutExternally() {
    window.open(this.authService.logoutUrl);
  }

  get hasValidToken() { 
    return this.authService.hasValidToken(); 
  }
  
  get accessToken() { 
    return this.authService.accessToken; 
  }
  
  get refreshToken() { 
    return this.authService.refreshToken; 
  }
  
  get identityClaims() { 
    return this.authService.identityClaims; 
  }
  
  get idToken() { 
    return this.authService.idToken; 
  }
  
  get email(): string {
    return this.authService.identityClaims
    ? (this.authService.identityClaims as any)['email']
    : '-';
  }
}
