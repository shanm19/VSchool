angular.module("MainApp")
    .factory('UserFactory', function userFactory() {

        var User = function (userConfig) {
            this.firstName = userConfig.firstName;
            this.lastName = userConfig.lastName;
            this.email = userConfig.email;
            this.address = userConfig.address;
            this.city = userConfig.city;
            this.state = userConfig.state;
            this.postalCode = userConfig.postalCode;
        }

        return User;
    });