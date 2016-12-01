'use strict';

describe('Controller: TraditionalCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var TraditionalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraditionalCtrl = $controller('TraditionalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TraditionalCtrl.awesomeThings.length).toBe(3);
  });
});
