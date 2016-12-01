'use strict';

describe('Controller: CanonegroCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var CanonegroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CanonegroCtrl = $controller('CanonegroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CanonegroCtrl.awesomeThings.length).toBe(3);
  });
});
