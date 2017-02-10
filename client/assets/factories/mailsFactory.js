app.factory('mailsFactory', ['$http', function($http){
    var factory = {};
    var mails = [];
    var mail = [];

    factory.createMail = function(newMail, callback){
        $http.post("/mails", newMail).then(function(returned_data){
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    
    return factory;
}]);