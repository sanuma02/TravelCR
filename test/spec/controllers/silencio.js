'use strict';

describe('Controller: SilencioCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var SilencioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SilencioCtrl = $controller('SilencioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SilencioCtrl.awesomeThings.length).toBe(3);
  });
});
