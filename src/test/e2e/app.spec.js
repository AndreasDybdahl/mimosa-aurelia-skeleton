describe('aurelia blog app', () => {
  beforeEach(() => {
    browser.get("http://localhost:9000");
  });

  it('should redirect to #blog', () => {
    return browser.getCurrentUrl()
      .then(url => {
        expect(url).to.match(/#blog$/);
      });
  });

  it('should set the title', () => {
    return browser.getTitle()
      .then(title => {
        console.log('title: ' + title);
        expect(title).to.equal('Latest Posts | Blog | Application Title');
      });
  });
});