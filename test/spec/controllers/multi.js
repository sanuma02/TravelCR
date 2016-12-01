'use strict';

describe('Controller: MultiCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var MultiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MultiCtrl = $controller('MultiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MultiCtrl.awesomeThings.length).toBe(3);
  });
});
