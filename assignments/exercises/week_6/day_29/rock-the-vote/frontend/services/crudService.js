var app = angular.module("MainApp");

app.service("CrudService", ["$http", function ($http) {

    var _this = this;
    var baseUrl = "http://localhost:8000";
    this.issues = [];

    //Calculates total votes
    var netVotes = function (data) {
        _this.issues.forEach(function (issue, index) {
            _this.issues[index].totalVotes = issue.upvotes - issue.downvotes;
        });
    }

    //GET
    this.get = function () {
        return $http.get(baseUrl + "/issue")
            .then(function (response) {
                _this.issues = response.data;
                netVotes();
                return response.data;
            });
    }

    //POST
    this.post = function (issue, description) {
        var issueObj = {
            issue: issue,
            description: description
        };
        return $http.post(baseUrl + "/issue", issueObj)
            .then(function (response) {
                var post = response.data;
                _this.issues.push(post);
                post.totalVotes = post.upvotes - post.downvotes;
                return response.data;
            });
    }

    //PUT a new comment
    this.postComment = function (comment, index) {
        _this.issues[index].comments.push(comment);
        var id = _this.issues[index]._id;
        return $http.post(baseUrl + "/issue/" + id, _this.issues[index])
            .then(function (response) {
                return response.data;
            });
    }

    //PUT a new title or description
    this.put = function (update, updateType, index) {
        var issueUpdate = {};
        if (updateType === "issue") issueUpdate.issue = update;
        if (updateType === "description") issueUpdate.description = update;
        return $http.put(baseUrl + "/issue/" + _this.issues[index]._id, issueUpdate)
            .then(function (response) {
                _this.issues[index] = response.data;
                _this.issues[index].totalVotes = _this.issues[index].upvotes - _this.issues[index].downvotes;
                return response.data;
            });
    }

}]);