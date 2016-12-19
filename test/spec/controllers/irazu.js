'use strict';

describe('Controller: IrazuCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var IrazuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IrazuCtrl = $controller('IrazuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IrazuCtrl.awesomeThings.length).toBe(3);
  });
});
