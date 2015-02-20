import {Router} from 'aurelia-router';
import {BlogService} from '../services/blog';

import view from './index.html!';

export class Index {
  static inject() { return [Router, BlogService]; }
  constructor(router, blogService) {
    this.router = router;
    this.blogService = blogService;

    router.configure(config => {
      config.map([
        { route: ['', ':page'],                      moduleId: './list', nav: true, title: 'Latest Posts' },
        { route: ':year/:month/:date/:slug',         moduleId: './post', auth: true },
        { route: ['tags/:tag', 'tags/:tag/:page'],   moduleId: './tag' },
        { route: 'login',                            moduleId: './login', title: 'Login' },
        { route: 'admin',                            moduleId: './admin', title: 'Admin', auth: 'admin' }
      ]);
    });
  }

  getViewStrategy() {
    return view;
  }
}