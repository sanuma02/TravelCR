'use strict';

describe('Controller: DanausCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var DanausCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanausCtrl = $controller('DanausCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanausCtrl.awesomeThings.length).toBe(3);
  });
});
