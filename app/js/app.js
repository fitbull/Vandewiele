var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoCtrl', function($rootScope, $scope) {
    $scope.title = "Vandewiele Test Todo App";

    $scope.taskList = [
        {
            title: 'Pickup Dry cleaner',
            done: true,
            description: 'Pickup dry cleaner at that korean laundry.',
            onEdit: false
        },
        {
            title: 'Wash Car',
            done: false,
            description: 'Wash car at Pak Abu car spa.',
            onEdit: false
        },
        {
            title: 'Meeting with Mr Fitri',
            done: false,
            description: 'Meeting with Mr Fitri at 8.30am, sharp!!',
            onEdit: false
        }
    ];
    $scope.newTask = {
        title: undefined,
        description: undefined
    }

    $scope.addTask = function() {
        $scope.taskList.unshift({
            title: $scope.newTask.title,
            description: $scope.newTask.description,
            onEdit: false,
            done: false
        })

        $scope.clearing();
    }

    $scope.editing = function (x) {
        $scope.taskList[x].onEdit = !$scope.taskList[x].onEdit
    }

    $scope.deleting = function (x) {
        $scope.taskList.splice(x, 1);
    }

    $scope.duplicating = function (x) {
        $scope.taskList.unshift({
            title: $scope.taskList[x].title,
            description: $scope.taskList[x].description,
            onEdit: false,
            done: $scope.taskList[x].done
        })
    }

    $scope.clearing = function () {
        $scope.newTask = {
            title: undefined,
            description: undefined
        }
    }
})