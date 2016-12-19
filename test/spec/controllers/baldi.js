'use strict';

describe('Controller: BaldiCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var BaldiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BaldiCtrl = $controller('BaldiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BaldiCtrl.awesomeThings.length).toBe(3);
  });
});
