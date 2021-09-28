describe('Testing To Do App', function(){

    beforeEach(module('angularTodo'));

    describe('Testing AngularJS Controller', function(){

        var scope, ctrl;
        
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('angularTodoCtrl', {$scope:scope});
        }));

        it('should initialize the title in the scope', function(){
            inject(function($controller){
                ctrl = $controller('angularTodoCtrl', {$scope:scope});
            });

            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Vandewiele Test Todo App");
        });
        it('should able delete task', function () {

            expect(scope.taskList.length).toBe(3);
            expect(scope.taskList[0].title).toBe("Pickup Dry cleaner");
            expect(scope.taskList[0].description).toBe("Pickup dry cleaner at that korean laundry.");

        
            scope.deleting(0);

            expect(scope.taskList.length).toBe(2);
            expect(scope.taskList[0].title).not.toBe("Pickup Dry cleaner");
            expect(scope.taskList[0].description).not.toBe("Pickup dry cleaner at that korean laundry.");

        })

        it('should able to duplicate task', function () {

            expect(scope.taskList.length).toBe(3);
            expect(scope.taskList[0].title).toBe("Pickup Dry cleaner");
            expect(scope.taskList[0].description).toBe("Pickup dry cleaner at that korean laundry.");

        
            scope.duplicating(0);

            expect(scope.taskList.length).toBe(4);
            expect(scope.taskList[0].title).toBe(scope.taskList[1].title);
            expect(scope.taskList[0].description).toBe(scope.taskList[1].description);

        })

        it('should able to add new task', function () {
            expect(scope.taskList).toBeDefined();
            expect(scope.taskList.length).toBe(3);

            scope.newTask = {
                title: "Test title",
                description: "test description"
            }

            scope.addTask();

            expect(scope.taskList.length).toBe(4);
            expect(scope.taskList[0].title).toBe("Test title");
            expect(scope.taskList[0].description).toBe("test description");

        })

    });
});