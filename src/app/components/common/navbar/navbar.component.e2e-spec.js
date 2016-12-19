describe('navbar', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-navbar>', function () {
    var navbar = element(by.css('my-app my-navbar'));
    expect(navbar.isPresent()).toEqual(true);
    expect(navbar.getText()).toEqual("navbar Works!");
  });

});
