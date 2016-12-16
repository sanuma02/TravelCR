'use strict';

describe('Controller: ChocolateCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var ChocolateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChocolateCtrl = $controller('ChocolateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChocolateCtrl.awesomeThings.length).toBe(3);
  });
});
