angular.module("MainApp", []).controller("MainController", function ($scope) {

    $scope.submits = [
        {
            title: "Aussie",
            url: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi",
            description: "Blue Merle Aussie",
            id: 30,
            comments: [

            ]
        },
        {
            title: "Lab",
            url: "https://s-media-cache-ak0.pinimg.com/236x/5e/ca/78/5eca78edce3424bd17a5d23028b9f6aa.jpg",
            description: "Labrador Retriever",
            id: 31,
            comments: [

            ]
        },
        {
            title: "German Shepherd",
            url: "https://s-media-cache-ak0.pinimg.com/564x/dd/a4/3b/dda43bf31a3e21896a423f19fbebdf70.jpg",
            description: "German Shepherd Puppy",
            id: 32,
            comments: [

            ]
        }
    ];

    $scope.title = "";
    $scope.url = "";
    $scope.description = "";
    var id = 0;

    //submission constructor
    var Submission = function (title, url, description, id) {
        this.title = title;
        this.url = url;
        this.description = description;
        this.id = id;
    }

    //adds a new submission
    $scope.submit = function () {

        var temp = new Submission($scope.title, $scope.url, $scope.description, id);

        $scope.submits.push(temp);

        //reset the input fields
        $scope.title = "";
        $scope.url = "";
        $scope.description = "";

        id++;

    }

    //adds a single comment to a post
    $scope.addComment = function (index, comment) {
        $scope.submits[index].comments.push(comment);
        $scope.submits[index].comment = '';
    }

    //removes an entire submission
    $scope.deleteAll = function (index) {
        $scope.submits.splice(index, 1);
    }

    //remove a specific comment
    $scope.removeComment = function (submitIndex, commentIndex) {
        $scope.submits[submitIndex].comments.splice(commentIndex, 1);
    }

});