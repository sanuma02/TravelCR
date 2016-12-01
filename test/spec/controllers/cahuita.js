'use strict';

describe('Controller: CahuitaCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CahuitaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CahuitaCtrl = $controller('CahuitaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CahuitaCtrl.awesomeThings.length).toBe(3);
  });
});
