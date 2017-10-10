
effortsTrack.controller('mainController', function ($scope) {
    $scope.sprintList = sprintData;
    $scope.activityList = activityData;
    $scope.date = new Date();
    $scope.selectedTasks = [];

    // Developer Note : Initial Values for UI (At least one empty task at startup)
    $scope.tableRows = {
        data: [
            {
                "rowid": $scope.rowCount,
                "date": "",
                "name": "",
                "sprint": "",
                "userStory": "",
                "activity": "",
                "effortsSpent": "",
                "comments": ""
            }
        ]
    };
    var index = 0;
    $scope.addTask = function addTask() { //Developer Note : Adding task to existing array 
        ++index;
        var newTaskObject = {
            "rowid": index,
            "date": "",
            "name": "",
            "sprint": "",
            "userStory": "",
            "activity": "",
            "effortsSpent": "",
            "comments": ""
        };
        $scope.tableRows.data.push(newTaskObject);
    };

    // Developer Note : For every checkbox click, add or remove entries from selected tasks accordingly
    // If entry N exists , it means user have selectes N'th task and otherwise push to selected task
    $scope.clickAction = function clickAction(id) {
        var existFlag = false;
        $scope.selectedTasks.forEach(function (element) {
            if (element == id) {
                existFlag = true;
                delete $scope.selectedTasks[index];
            }
        });
        if (existFlag == false) {
            $scope.selectedTasks.push(id);
        }
    };

    $scope.deleteTask = function deleteTask() {
        $scope.selectedTasks.forEach(function (element) {
            _.remove($scope.tableRows.data, function (row) {
                if (row.rowid == element) {
                    return row;
                }
            });
        });
    };
});

effortsTrack.controller('loginPageController', function ($scope) {
    $scope.login = function(){
        
    };
});
