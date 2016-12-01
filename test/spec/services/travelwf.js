'use strict';

describe('Service: travelwf', function () {

  // load the service's module
  beforeEach(module('travelApp'));

  // instantiate service
  var travelwf;
  beforeEach(inject(function (_travelwf_) {
    travelwf = _travelwf_;
  }));

  it('should do something', function () {
    expect(!!travelwf).toBe(true);
  });

});
