'use strict';

describe('Controller: CanopyCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CanopyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanopyCtrl = $controller('CanopyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CanopyCtrl.awesomeThings.length).toBe(3);
  });
});
