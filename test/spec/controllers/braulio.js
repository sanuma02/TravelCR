'use strict';

describe('Controller: BraulioCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var BraulioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BraulioCtrl = $controller('BraulioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BraulioCtrl.awesomeThings.length).toBe(3);
  });
});
