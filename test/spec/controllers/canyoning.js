'use strict';

describe('Controller: CanyoningCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CanyoningCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanyoningCtrl = $controller('CanyoningCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CanyoningCtrl.awesomeThings.length).toBe(3);
  });
});
