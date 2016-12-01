'use strict';

describe('Controller: TasteCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var TasteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasteCtrl = $controller('TasteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TasteCtrl.awesomeThings.length).toBe(3);
  });
});
