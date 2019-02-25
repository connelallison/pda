var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should concatenate multiple number button clicks', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22');
  });

  it('should chain multiple operations together', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20');
  });

  it('should be able to clear the running total without affecting the calculation', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#clear')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  });

  it('should be able to divide by three with reasonable accuracy', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.3333333333333333');
  })

  it('should display \'Not a number\' when dividing by 0', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number');
  })

});
