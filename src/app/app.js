import {Router} from 'aurelia-router';
import {AuthorizeStep} from './blog/services/auth';

import view from './app.html!';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Application Title';
      config.addPipelineStep('authorize', AuthorizeStep);
      config.map([
        { route: 'blog',      moduleId: './blog/routes/index', nav: true, title: 'Blog' },
        { route: 'docs',      moduleId: './docs/routes/index', nav: true, title: 'Docs' },
        { route: '',          moduleId: './redirect', redirect: '/blog' }
      ]);
    });
  }

  getViewStrategy() {
    return view;
  }
}