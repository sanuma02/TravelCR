'use strict';

/**
 * @ngdoc function
 * @name travelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the travelApp
 */
angular.module('travelApp')
  .controller('MainCtrl', function (travelwf) {
    var vm = this;
    vm.country = "United States";
    vm.CR = false;


    vm.ChooseLanguage = function () {
      travelwf.SetCountry(vm.country.code);
      if(vm.country.code == 'CR'){
          vm.CR = true;
      }
      $('#tmodeal').modal('hide')
    };

    initModal();

    function initModal(){

      var current = travelwf.GetCurrentCountry();
      if(current !== "empty"){
        if(current == "CR"){
          vm.CR = true;
        }

                 
      }else{


      travelwf.GetCountries()
            .success(function(data) {
                vm.countries = data;
                vm.country = {	"name": "United States","code": "US"};
                $('#tmodeal').modal({ show: true})

              
              
            })
            .error(function() {
                console.log('could not find countries.json');
            });
      }
      
    }
    

    
  });
