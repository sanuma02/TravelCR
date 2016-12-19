'use strict';

describe('Controller: DonjuanCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var DonjuanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonjuanCtrl = $controller('DonjuanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DonjuanCtrl.awesomeThings.length).toBe(3);
  });
});
