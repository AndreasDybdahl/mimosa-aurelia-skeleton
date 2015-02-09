import 'BootFunk';
import 'font-awesome/css/font-awesome.css!';
import 'style/site.css!'

import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {bootstrap} from 'aurelia-bootstrapper';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

bootstrap(aurelia => {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator();

  aurelia.start().then(a => a.setRoot('app/app', document.body));
});