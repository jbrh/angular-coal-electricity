MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();


var app = angular.module('coalElectricity', ['ngAnimate']);

var Brazilcountryis = "Brazil";
var Brazilcoalplantcapacity = 1.2e+7;
var Brazilbtusin = 1.0e+4;
var Brazilpoundcoalbtus = 5.0e+3;
var Brazilpoundssulfurpoundcoal = 1.0e-2;
var Brazilsulfurinmillionbtus = 1.0e+6;
var Brazilanswertoproblem1 = (Brazilcoalplantcapacity*Brazilbtusin);
var Brazilanswertoproblem2 = (Brazilanswertoproblem1/Brazilpoundcoalbtus);
var Brazilanswertoproblem3 = (Brazilanswertoproblem2*0.01);
var Brazilanswertoproblem4 = Math.round(Brazilanswertoproblem1*1.2/Brazilsulfurinmillionbtus);
       
var Canadacountryis = "Canada";
var Canadacoalplantcapacity = 2.25e+7;
var Canadabtusin = 1.5e+4;
var Canadapoundcoalbtus = 2.0e+3;
var Canadapoundssulfurpoundcoal = 1.0e-2;
var Canadasulfurinmillionbtus = 1.0e+6;
var Canadaanswertoproblem1 = (Canadacoalplantcapacity*Canadabtusin);
var Canadaanswertoproblem2 = (Canadaanswertoproblem1/Canadapoundcoalbtus);
var Canadaanswertoproblem3 = (Canadaanswertoproblem2*0.01);
var Canadaanswertoproblem4 = Math.round((Canadaanswertoproblem1*1.2)/Canadasulfurinmillionbtus);
       
var Indiacountryis = "India";
var Indiacoalplantcapacity = 0.5e+7;
var Indiabtusin = 1.5e+4;
var Indiapoundcoalbtus = 7.0e+3;
var Indiapoundssulfurpoundcoal = 1.0e-2;
var Indiasulfurinmillionbtus = 1.0e+6;
var Indiaanswertoproblem1 = (Indiacoalplantcapacity*Indiabtusin);
var Indiaanswertoproblem2 = (Indiaanswertoproblem1/Indiapoundcoalbtus);
var Indiaanswertoproblem3 = (Indiaanswertoproblem2*0.01);
var Indiaanswertoproblem4 = Math.round(Indiaanswertoproblem1*1.2/Indiasulfurinmillionbtus);
       
var SouthAfricacountryis = "South Africa";
var SouthAfricacoalplantcapacity = 1.5e+7;
var SouthAfricabtusin = 1.25e+4;
var SouthAfricapoundcoalbtus = 10.0e+3;
var SouthAfricapoundssulfurpoundcoal = 1.0e-2;
var SouthAfricasulfurinmillionbtus = 1.0e+6; 
var SouthAfricaanswertoproblem1 = (SouthAfricacoalplantcapacity*SouthAfricabtusin);
var SouthAfricaanswertoproblem2 = (SouthAfricaanswertoproblem1/SouthAfricapoundcoalbtus);
var SouthAfricaanswertoproblem3 = (SouthAfricaanswertoproblem2*0.01);
var SouthAfricaanswertoproblem4 = Math.round(SouthAfricaanswertoproblem1*1.2/SouthAfricasulfurinmillionbtus);
       
var USAcountryis = "USA";
var USAcoalplantcapacity = 2.5e+7;
var USAbtusin = 0.5e+4;
var USApoundcoalbtus = 5.0e+3;
var USApoundssulfurpoundcoal = 1.0e-2;
var USAsulfurinmillionbtus = 1.0e+6;
var USAanswertoproblem1 = (USAcoalplantcapacity*USAbtusin);
var USAanswertoproblem2 = (USAanswertoproblem1/USApoundcoalbtus);
var USAanswertoproblem3 = (USAanswertoproblem2*0.01);
var USAanswertoproblem4 = Math.round(USAanswertoproblem1*1.2/USAsulfurinmillionbtus);

    
app.directive("mathjaxBind", function() { //<!--http://jsfiddle.net/spicyj/ypqvp/
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs, InformationService) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});


app.controller('MyCtrl', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression1 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe = false;
	
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	};
	
    
});

/*app.controller('MyCtrl2', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression2 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe2 = false;
	
	$scope.myFunc = function() {
		$scope.showMe2 = !$scope.showMe2;
	};
	
    
});*/

/*app.controller('MyCtrl3', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe3 = false;
	
	$scope.myFunc = function() {
		$scope.showMe3 = !$scope.showMe3;
	};
	
    
});*/
 
       
app.controller('LocationListController', function ($scope, InformationService) {
	$scope.order = "place";
	$scope.info = InformationService;

});


app.controller('LocationDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;

});


app.service('InformationService', function () {

	return {
		
		'addLocation': function (location) {
			this.locations.push(location);
		},
	
		'selectedLocation': null,
		'locations': [
			{
				"place": "Brazil",
				"coalplantcapacity": 1.2e+7,
				"btusin": 1.0e+4,
				"poundcoalbtus": 5.0e+3,
				"poundssulfurpoundcoal": 1.0e-2,
				"sulfurinmillionbtus": 1.0e+6,
				"questionone": "\ \\left("+Brazilcoalplantcapacity.toExponential()+"\\frac{\\ kWh}{\\ day}\\right) \\times \\left("+Brazilbtusin.toExponential()+"\\frac{\\ BTUs}{\\ kWh}\\right) =\\ "+Brazilanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}",
				"questiontwo": "\ \\left("+Brazilanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\div \\left("+Brazilpoundcoalbtus.toExponential()+"\\frac{BTUs}{\\ lb \\ coal}\\right) =\\ "+Brazilanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}",
				"questionthree": "\ \\left("+Brazilanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}\\right) \\times \\left("+Brazilpoundssulfurpoundcoal.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ lb \\ coal}\\right)  =\\ "+Brazilanswertoproblem3.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ day}",
				"questionfour": "\ \\left("+Brazilanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\times \\left(1.2 \\frac{\\ lbs \\ sulfur}{\\ "+Brazilsulfurinmillionbtus.toExponential()+"\\ BTUs}\\right) =\\ "+Brazilanswertoproblem4.toExponential()+"\\frac{\\ lbs\\ sulfur}{\\ day}"
				
				  
			},
			{
				"place": "Canada",
				"coalplantcapacity": 2.25e+7,
				"btusin": 1.5e+4,
				"poundcoalbtus": 2.0e+3,
				"poundssulfurpoundcoal": 1.0e-2,
				"sulfurinmillionbtus": 1.0e+6,
				"questionone": "\ \\left("+Canadacoalplantcapacity.toExponential()+"\\frac{\\ kWh}{\\ day}\\right) \\times \\left("+Canadabtusin.toExponential()+"\\frac{\\ BTUs}{\\ kWh}\\right) =\\ "+Canadaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}",
				"questiontwo": "\ \\left("+Canadaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\div \\left("+Canadapoundcoalbtus.toExponential()+"\\frac{BTUs}{\\ lb \\ coal}\\right) =\\ "+Canadaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}",
				"questionthree": "\ \\left("+Canadaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}\\right) \\times \\left("+Canadapoundssulfurpoundcoal.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ lb \\ coal}\\right)  =\\ "+Canadaanswertoproblem3.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ day}",
				"questionfour": "\ \\left("+Canadaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\times \\left(1.2 \\frac{\\ lbs \\ sulfur}{\\ "+Canadasulfurinmillionbtus.toExponential()+"\\ BTUs}\\right) =\\ "+Canadaanswertoproblem4.toExponential()+"\\frac{\\ lbs\\ sulfur}{\\ day}"
				  
			
				
			},
			{
				"place": "India",
				"coalplantcapacity": 0.5e+7,
				"btusin": 1.5e+4,
				"poundcoalbtus": 7.0e+3,
				"poundssulfurpoundcoal": 1.0e-2,
				"sulfurinmillionbtus": 1.0e+6,
				"questionone": "\ \\left("+Indiacoalplantcapacity.toExponential()+"\\frac{\\ kWh}{\\ day}\\right) \\times \\left("+Indiabtusin.toExponential()+"\\frac{\\ BTUs}{\\ kWh}\\right) =\\ "+Indiaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}",
				"questiontwo": "\ \\left("+Indiaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\div \\left("+Indiapoundcoalbtus.toExponential()+"\\frac{BTUs}{\\ lb \\ coal}\\right) =\\ "+Indiaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}",
				"questionthree": "\ \\left("+Indiaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}\\right) \\times \\left("+Indiapoundssulfurpoundcoal.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ lb \\ coal}\\right)  =\\ "+Indiaanswertoproblem3.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ day}",
				"questionfour": "\ \\left("+Indiaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\times \\left(1.2 \\frac{\\ lbs \\ sulfur}{\\ "+Indiasulfurinmillionbtus.toExponential()+"\\ BTUs}\\right) =\\ "+Indiaanswertoproblem4.toExponential()+"\\frac{\\ lbs\\ sulfur}{\\ day}"
				 
				
			},
			{
				"place": "South Africa",
				"coalplantcapacity": 1.5e+7,
				"btusin": 1.25e+4,
				"poundcoalbtus": 10.0e+3,
				"poundssulfurpoundcoal": 1.0e-2,
				"sulfurinmillionbtus": 1.0e+6,
				"questionone": "\ \\left("+SouthAfricacoalplantcapacity.toExponential()+"\\frac{\\ kWh}{\\ day}\\right) \\times \\left("+SouthAfricabtusin.toExponential()+"\\frac{\\ BTUs}{\\ kWh}\\right) =\\ "+SouthAfricaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}",
				"questiontwo": "\ \\left("+SouthAfricaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\div \\left("+SouthAfricapoundcoalbtus.toExponential()+"\\frac{BTUs}{\\ lb \\ coal}\\right) =\\ "+SouthAfricaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}",
				"questionthree": "\ \\left("+SouthAfricaanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}\\right) \\times \\left("+SouthAfricapoundssulfurpoundcoal.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ lb \\ coal}\\right)  =\\ "+SouthAfricaanswertoproblem3.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ day}",
				"questionfour": "\ \\left("+SouthAfricaanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\times \\left(1.2 \\frac{\\ lbs \\ sulfur}{\\ "+SouthAfricasulfurinmillionbtus.toExponential()+"\\ BTUs}\\right) =\\ "+SouthAfricaanswertoproblem4.toExponential()+"\\frac{\\ lbs\\ sulfur}{\\ day}"
				  
				
			},
			{
				"place": "USA",
				"coalplantcapacity": 2.5e+7,
				"btusin": 0.5e+4,
				"poundcoalbtus": 5.0e+3,
				"poundssulfurpoundcoal": 1.0e-2,
				"sulfurinmillionbtus": 1.0e+6,
				"questionone": "\ \\left("+USAcoalplantcapacity.toExponential()+"\\frac{\\ kWh}{\\ day}\\right) \\times \\left("+USAbtusin.toExponential()+"\\frac{\\ BTUs}{\\ kWh}\\right) =\\ "+USAanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}",
				"questiontwo": "\ \\left("+USAanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\div \\left("+USApoundcoalbtus.toExponential()+"\\frac{BTUs}{\\ lb \\ coal}\\right) =\\ "+USAanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}",
				"questionthree": "\ \\left("+USAanswertoproblem2.toExponential()+"\\frac{\\ lbs \\ coal}{\\ day}\\right) \\times \\left("+USApoundssulfurpoundcoal.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ lb \\ coal}\\right)  =\\ "+USAanswertoproblem3.toExponential()+"\\frac{\\ lbs \\ sulfur}{\\ day}",
				"questionfour": "\ \\left("+USAanswertoproblem1.toExponential()+"\\frac{\\ BTUs}{\\ day}\\right) \\times \\left(1.2 \\frac{\\ lbs \\ sulfur}{\\ "+USAsulfurinmillionbtus.toExponential()+"\\ BTUs}\\right) =\\ "+USAanswertoproblem4.toExponential()+"\\frac{\\ lbs\\ sulfur}{\\ day}"
				  
				
			},
		]
		
	};
});