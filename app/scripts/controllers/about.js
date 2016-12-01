'use strict';

/**
 * @ngdoc function
 * @name travelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the travelApp
 */
angular.module('travelApp')
  .controller('AboutCtrl', function (travelwf) {
    var vm = this;
    
    var code = travelwf.GetCurrentCountry();

    if(code == 'CR'){
          vm.CR = true;
      }else{
        vm.CR = false;
      }
    
    
    
  });
