'use strict';

describe('Controller: ChirripoCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var ChirripoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChirripoCtrl = $controller('ChirripoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChirripoCtrl.awesomeThings.length).toBe(3);
  });
});
