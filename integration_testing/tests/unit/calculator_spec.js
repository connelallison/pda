var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal)
  })

  it('it can subtract', function () {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide', function () {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  })

});
