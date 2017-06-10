app.controller('mailNewController', ['$scope','mailsFactory', '$location', function($scope, mailsFactory, $location) {

    $scope.create = function(){
        mailsFactory.createMail($scope.contact, function(data){
            if (data.success) {
            	$location.url("/formsubmitted");
            	
            }
            else{
            	alert('Oops! Form not submitted!');	
            }
        });
    }
}]);