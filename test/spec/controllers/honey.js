'use strict';

describe('Controller: HoneyCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var HoneyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HoneyCtrl = $controller('HoneyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HoneyCtrl.awesomeThings.length).toBe(3);
  });
});
