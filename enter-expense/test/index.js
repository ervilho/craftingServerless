var expect  = require('chai').expect;
var sinon = require('sinon');

it('runs an async test', function(done) {
  expect(1+2).to.equal(3);
  done();
    // request('http://localhost:8080' , function(error, response, body) {
    //     expect(body).to.equal('Hello World');
    //     done();
    // });
});

it('runs a synchronous test', function() {
  expect(1+2).to.equal(3);
})

it("works", function(done) {
  const lambda =  require('../index');
  const parseStub = sinon.stub();
  done();
  // TODO: test à compléter
});
