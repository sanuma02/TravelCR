'use strict';

describe('Controller: CararaCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CararaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CararaCtrl = $controller('CararaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CararaCtrl.awesomeThings.length).toBe(3);
  });
});
