import {AuthenticationService} from '../services/auth';

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

  getViewStrategy() {
    return view;
  }
}