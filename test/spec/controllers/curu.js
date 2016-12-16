'use strict';

describe('Controller: CuruCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CuruCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CuruCtrl = $controller('CuruCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CuruCtrl.awesomeThings.length).toBe(3);
  });
});
