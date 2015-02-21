import {AuthenticationService} from '../services/auth';
import {AppRouter} from 'aurelia-router';

import view from './login.html!';

export class Login {
  static inject() { return [AuthenticationService]; }
  constructor(authService) {
    this.authService = authService;
    this.running = false;
  }

  canActivate() {
    return this.authService.user === null;
  }

  activate(params, query, route) {
    if (query.redirectTo) {
      this.redirectTo = query.redirectTo;
    } else {
      this.redirectTo = '/';
    }
  }

  getViewStrategy() {
    return view;
  }

  login() {
    if (this.running)
      return;

    this.running = true;
    this.authService.login(this.username.value, this.password.value)
      .then(success => {
        this.running = false;
        if (success) {
          this.router.navigate(this.redirectTo);
        } else {
          // TODO: Display error
        }
      }, e => {
        this.running = false;
        return Promise.reject(e);
      });
  }
}