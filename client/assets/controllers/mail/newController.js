app.controller('mailNewController', ['$scope','mailFactory', '$location', function($scope, mailFactory, $location) {

    $scope.create = function(){
        contactsFactory.createContact($scope.contact, function(){
            alert('your message has been sent');
            $location.url("/");
        });
    }
}]);