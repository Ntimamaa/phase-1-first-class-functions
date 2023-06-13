function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function fn() {
    }
    return fn;
  }
returnsANamedFunction();


  function returnsAnAnonymousFunction() {
    return function() {
    }
  }
  returnsAnAnonymousFunction();