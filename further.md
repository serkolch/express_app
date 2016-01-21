# Setup

# Jasmine

## Setup

> For this project, this step has already been run!

```
# add to package
$ npm install --save-dev jasmine
# create spec folder
$ jasmine init
```

## Writing

Anatomy of a test

```
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

> Read through this [sample spec]() and try running it!

```
describe('some ode or scenario', function(){
  // write setup across each
  it('state the purpose or intended behavior', function(){
    // write setup code to test here
    expect("what your code does").toEqual("intended outcome")
  });
});
```

## Running

```
# jasmine will try and run files ending in "_spec.js" in the spec/ folder
$ jasmine
```

# Travis.CI

## Starting

Sign up for Travis by linking your github account

https://travis-ci.org/

## Setup

Create a `.travis.yml` file in the root of your repo.

```
language: node_js
node_js: "stable"
services:
  - mongodb
before_script:
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start" # (X Virtual Framebuffer) to imitate a display
  - "node app.js &" # run express in background
  - sleep 3 # give xvfb some time to start
script:
  - npm test # defined in your package.json file
```

Travis runs the yml file to setup and then executes "npm test"

> What does "npm test" do?

Checkout Travis.CI's dashboard. Click on your acccount/profile page and tell Travis to watch your repo

Now push your code to Github!

Add the Travis CI build status to your readme.md and push again.

# Zombie.js

Zombie.js provides a headless browser that we can use to either
scrape pages or for use in our tests.

## Setup

> This is already been done for this project

```
$ npm install --save-dev zombie
```

## Usage

We can use zombie.js in our specs to create a browser object
and test interacting with the page.

```
// setup before our specs
process.env.NODE_ENV = 'test';
// use zombie.js as headless browser
var Zombie = require('zombie');
// initialize the browser using the same port as the test application
var browser = new Zombie({ site: 'http://localhost:3000' });
```

Read through `/spec/zombie_spec.js` to see how the `browser`
object is used.

# Putting it all together

Remove the "x" from the test suite in "visit_spec" and try running the code.
Can you fix the errors and deploy a working build to Travis?

# Resources

- http://zombie.js.org/
- https://travis-ci.org/
- http://jasmine.github.io/edge/introduction.html
