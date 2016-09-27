var app = angular.module("MainApp");

app.controller("HomeController", ["$scope", "CrudService", function ($scope, CrudService) {

    $scope.display = false;
    $scope.issueButton = "New Issue";
    $scope.issue = "";
    $scope.issues = CrudService.issues;

    //Toggle new Issue
    $scope.newIssue = function () {
        $scope.display = !$scope.display;

        if ($scope.display) {
            $scope.issueButton = "Cancel";
        } else {
            $scope.issueButton = "New Issue";
        }
    }

    //Get 
    $scope.get = function () {
        CrudService.get().then(function (response) {
            $scope.data = response;

            $scope.data.forEach(function (issue, index) {
                $scope.data[index].totalVotes = issue.upvotes - issue.downvotes;
            });
        });

    }

    $scope.get();

    //Post
    var post = function (issue, description) {
        CrudService.post(issue, description).then(function (response) {
            $scope.data = CrudService.issues;
            $scope.issue = "";
        });
    }

    //Post new comment
    $scope.postComment = function (comment, index) {
        if (comment) {
            CrudService.postComment(comment, index);
        }
    }

    //Put
    $scope.update = function (update, id, index) {
        CrudService.put(update, id, index).then(function (response) {
            $scope.data = CrudService.issues;
        });
    }

    //DOM functions
    $scope.submit = function (issue, description) {
        post(issue, description);
        $scope.newIssue();
    }

    $scope.editTitle = function (index) {

    }

    //Voting sections
    $scope.upvote = function (index) {
        if (!$scope.data[index].didUpvote) {
            $scope.data[index].upvotes += 1;
            $scope.data[index].totalVotes += 1;
            $scope.data[index].didUpvote = true;
        } else {
            $scope.data[index].upvotes -= 1;
            $scope.data[index].totalVotes -= 1;
            $scope.data[index].didUpvote = false;
        }

    }
    $scope.downvote = function (index) {
        if (!$scope.data[index].didDownvote) {
            $scope.data[index].downvotes -= 1;
            $scope.data[index].totalVotes -= 1;
            $scope.data[index].didDownvote = true;
        } else {
            $scope.data[index].downvotes += 1;
            $scope.data[index].totalVotes += 1;
            $scope.data[index].didDownvote = false;
        }

    }

    //Edit display
    $scope.editTitle = function (newTitle, index) {
        CrudService.put(newTitle, "issue", index);
    }
    $scope.editDescription = function (newDescription, index) {
        CrudService.put(newDescription, "description", index);
    }

}]);