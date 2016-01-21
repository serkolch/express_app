process.env.NODE_ENV = 'test';
// use zombie.js as headless browser
var Zombie = require('zombie');
// initialize the browser using the same port as the test application
var browser = new Zombie({ site: 'http://localhost:3000' });

describe('home page', function() {
  // load the contact page
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('show a rat form', function(){
    var title = browser.text('h1');
    expect(title).toEqual("Rats");
  });

  describe('submitting the form', function(){
    beforeEach(function(done) {
      browser
        .fill('#rat-name', 'George')
        .pressButton('Create', done);
    })
    it('adds a name', function(){
      // name should be on the dom
      var liTag = browser.query('li:last-child');
      expect(liTag.textContent).toEqual('George');
    });
  });
  describe('submitting an empty form', function(){
    beforeEach(function(done) {
      browser
        .fill('Name', '')
        .pressButton('Create', done);
    });
    it('refuses to submit', function(){
      // form should be empty
      var statusMessage = browser.text('#form_status');
      expect(statusMessage).toEqual("Name can't be blank!");
    });
  });
  describe("Deleting a rat")
});
