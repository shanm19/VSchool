var app = angular.module("MainApp");

app.controller("HomeController", ["$scope", "CarouselService", "NewsService", function($scope, CarouselService, NewsService){
    
    $scope.slides = CarouselService.slides;
    $scope.myInterval = CarouselService.myInterval;
    $scope.active = CarouselService.active;
    
    $scope.whatsOn = [
        {
            title: "Parks and Recreation",
            image: "http://www.indiewire.com/wp-content/uploads/2015/02/parks-rec.jpg",
            channel: "NBC",
            time: "8:30/7:30c"
        },
        {
            title: "The Office",
            image: "http://az616578.vo.msecnd.net/files/2016/09/10/636090712440577313-1427644327_2013_1025_Office_AboutImage_1920x1080_AC.jpg",
            channel: "NBC",
            time: "9/8c"
        },
        {
            title: "Chuck",
            image: "https://thetwocentscorp.files.wordpress.com/2012/04/13.jpg",
            channel: "NBC",
            time: "9:30/8:30c"
        },
        {
            title: "Lost",
            image: "http://www.goliath.com/wp-content/uploads/2015/10/Lost-TV-Show.jpg",
            channel: "ABC",
            time: "9/8c"
        }
    ]
    
    $scope.news = [];
    
    var getNews = function(){
        
        NewsService.getNews().then(function(response){
            //$scope.news = response;
            $scope.news = response;
            //console.log($scope.news);
        })
        
    }
    
    if(NewsService.newsArr.length == 0){
        getNews();
    }else{
        $scope.news = NewsService.newsArr;
    }
    
}]);