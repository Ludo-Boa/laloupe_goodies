// eventController ==============================

function eventController($scope, $http, eventService, friendService, $location, recetteService, $rootScope, userService, userFactory) {

    $('body').css('background-image', 'none').css('background-image', 'url("./assets/backhome.jpg")');

    $rootScope.$on('userFactoryUpdate', function() {
        $scope.nbEvents = 0;
        $scope.nbInvit = 0;
        $scope.invit = {};
        $scope.dataFriends = {};
        $scope.form = 1;
        $scope.creform = 1;
        $scope.showRecette = 'entree';
        if (userFactory.user.events) {
            $scope.events = userFactory.user.events;
            $scope.nbEvents = $scope.events.length;
        }
        if (userFactory.user.eventInvit) {
            $scope.invitEvents = userFactory.user.eventInvit;
            $scope.nbInvit = userFactory.user.eventInvit.length;
        }
        $scope.events = userFactory.user.events;


        $scope.required = true;

        $(function() {
            $('#search').on('keyup', function() {
                var pattern = $(this).val();
                $('.searchable-container .items').hide();
                $('.searchable-container .items').filter(function() {
                    return $(this).text().match(new RegExp(pattern, 'i'));
                }).show();
            });
        });

        $scope.update = function(event) {
            eventService.update(event._id, event).then(function(res) {
            });
        };

        $scope.delete = function(event) {
            $scope.seeEnvent = 1;
            eventService.delete(event).then(function(res) {});
          };


        $scope.formatDate = function(date) {
            var eventDate = new Date(date);
            return eventDate.getDate() + ' / ' + (eventDate.getMonth() + 1) + ' / ' + eventDate.getFullYear();
        };
        $scope.info = function(id, option) {
            for (var j = 0; j < userFactory.user.friends.length; j++) {
                if (userFactory.user.friends[j]._id == id) {
                    var name = userFactory.user.friends[j].name;
                    var prenom = userFactory.user.friends[j].prenom;
                    if (userFactory.user.friends[j].img) {
                        var image = userFactory.user.friends[j].img;
                    } else {
                        image = './assets/user-default.png';
                    }
                }
            }
            return option == 'nom' ? name : option == 'prenom' ? prenom : image ;
        };

        $scope.friendhistory = function(id) {
            $location.path('/friendhistory/' + id);
        };
    });

}
