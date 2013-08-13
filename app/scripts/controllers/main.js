'use strict';

var data = [

{
	user: "Konnie",
	procedure: "MRI Back",
	location: "San Francisco",
	medical_organization: "MRI Center",
	retail_price: 2500,
	insurance_organization: "Anthem",
	insurance_reimbursement: 1000
},

{
	user: "Konnie",
	procedure: "MRI Back",
	location: "San Francisco",
	medical_organization: "MRI Center",
	retail_price: 2500,
	insurance_organization: "Anthem",
	insurance_reimbursement: 1000
},

{
	user: "Konnie",
	procedure: "MRI Back",
	location: "San Francisco",
	medical_organization: "MRI Center",
	retail_price: 2500,
	insurance_organization: "Anthem",
	insurance_reimbursement: 1000
},

{
	user: "Konnie",
	procedure: "MRI Back",
	location: "San Francisco",
	medical_organization: "MRI Center",
	retail_price: 2500,
	insurance_organization: "Anthem",
	insurance_reimbursement: 1000
},

{
	user: "Konnie",
	procedure: "MRI Back",
	location: "San Francisco",
	medical_organization: "MRI Center",
	retail_price: 2500,
	insurance_organization: "Anthem",
	insurance_reimbursement: 1000
}

];

angular.module('wazeMedicalApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.data = data;

    $scope.booya = function() {
    	$location.url('/boo').search({location:'foo', procedure: 'bar'});
    };
  });
