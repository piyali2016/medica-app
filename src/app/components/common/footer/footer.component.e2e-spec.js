describe('footer', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-footer>', function () {
    var footer = element(by.css('my-app my-footer'));
    expect(footer.isPresent()).toEqual(true);
    expect(footer.getText()).toEqual("footer Works!");
  });

});
