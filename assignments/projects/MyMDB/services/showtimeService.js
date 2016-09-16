var app = angular.module("MainApp");
//api_key = pknv95jm26m3c8z9mjr6v4yp
app.service("ShowtimeService", ["$http", function ($http) {

    var _this = this;

    var apikey = "pknv95jm26m3c8z9mjr6v4yp";
    var baseUrl = "http://data.tmsapi.com/v1.1";
    var showtimesUrl = baseUrl + '/movies/showings';
    var d = new Date();
    var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    //example http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-09-15&numDays=7&zip=84081&radius=10&api_key=pknv95jm26m3c8z9mjr6v4yp


    //the function that broke my brain
    //this will add and return all showtimes to a specific theatre, with their Fandango URI's
    var theatreSeparator = function (show) {

        var theatreObj = {};

        for (var i = 0; i < show.showtimes.length; i++) {

            if (!theatreObj.hasOwnProperty(show.showtimes[i].theatre.id)) {

                theatreObj[show.showtimes[i].theatre.id] = {
                    showtimes: [show.showtimes[i].dateTime],
                    theater: show.showtimes[i].theatre.name,
                    ticketURI: show.showtimes[i].ticketURI
                };

            } else {

                theatreObj[show.showtimes[i].theatre.id].showtimes.push(show.showtimes[i].dateTime);

            }

        }

        return theatreObj;

    }

    //this function will add a theatre object of each theatre and their associated showtimes
    var showSeparator = function (shows) {

        for (var i = 0; i < shows.length; i++) {

            shows[i].theatreShowings = theatreSeparator(shows[i]);

        }

    }

    //function to find all showtimes based on a zip code
    //not currently robust, it defaults to today's showings, and within two miles
    this.findShowtimes = function (zip) {

        return $http.get(showtimesUrl + "?startDate=" + today + "&numDays=1" + "&zip=" + zip + "&radius=5" + "&api_key=" + apikey).then(function (response) {

            showSeparator(response.data);

            console.log(response.data);

            return response.data;

        })

    }

}]);