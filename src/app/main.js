import 'BootFunk';
import 'font-awesome/css/font-awesome.css!';
import 'style/site.css!'

import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {bootstrap} from 'aurelia-bootstrapper';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

bootstrap(aurelia => {
  preventActionlessFormSubmit();

  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator();

  aurelia.start().then(a => a.setRoot('app/app', document.body));
});

function preventActionlessFormSubmit() {
  document.body.addEventListener('submit', evt => {
    const target = evt.target;
    const action = target.action;
    if (target.tagName.toLowerCase() === 'form' && !action)
      evt.preventDefault();
  });
}