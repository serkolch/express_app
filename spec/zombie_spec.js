process.env.NODE_ENV = 'test';
// use zombie.js as headless browser
var Zombie = require('zombie');
// initialize the browser
var browser = new Zombie({ site: 'http://www.example.com' });

xdescribe('the homepage', function(){

  beforeEach(function(done){
    browser.visit('/', done);
  });

  it("says 'Example Domain'", function(){
    var heading = browser.query('h1').textContent;
    expect(heading).toEqual('Rat Store');
  })
});
