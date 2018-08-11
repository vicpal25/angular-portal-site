import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from '../../node_modules/rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user$: Observable<User>;

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private authService: AuthService) {

      this.isLoggedIn$ = true;

    }

     ngOnInit() {

      this.isLoggedIn$ = this.authService.isLoggedIn$;
      this.isLoggedOut$ = this.authService.isLoggedOut$;

     }



}
