import {BlogService} from '../../services/blog';

import moment from 'moment';

export class List {
  static inject() { return [BlogService]; }
  constructor(blogService) {
    this.blogService = blogService;
  }

  activate() {
    return this.blogService.getLatest()
      .then(({posts, total, page}) => {
        this.posts = posts;
        this.total = total;
        this.page = page;
      });
  }

  url(post) {
    let date = moment(post.date);
    return `#/blog/${date.format('YYYY/MM/DD')}/${post.slug}/`
  }

  tagUrl(tag) {
    return `#/blog/tags/${tag}/`;
  }

  date(post) {
    return moment(post.date).format('MMM D');
  }
}