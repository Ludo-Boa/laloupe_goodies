function compteController($scope, $rootScope, $location, eventService, friendService, userService){
	$('body').css('background-image', 'none').css('background-image','url("./assets/pasta.jpg")');
	function load (){
		eventService.get().then(function(res){
			$scope.events = res.data;
		});
		friendService.get().then(function(res){
			$scope.friends = res.data;
		});
		userService.findOne($rootScope.userId).then(function (res) {
			$scope.user = res.data;
		});
	}
	load();

	// ==================  Hover pencil case =============

	$(document).ready(function () {
        $('.info').hover(function () {
            $('.fa-1').addClass('fa-12');
        }, function () {
            $('.fa-1').removeClass('fa-12');
        });
    });

		// ================= END Hover pencil case =============


			$scope.update = function(user, element){

				userService.update($rootScope.userId, user).then(function(res){
						switch (element){
							case 'adresse':
								$scope.adresse = false;
								break;
							case 'adresseEmail':
								$scope.adresseEmail = false;
								break;
							case 'adresseUserName':
								$scope.adresseUserName = false;
								break;
							case 'img':
								$scope.img = false;
						}
					load();
				});
			}

	    // ===================== FLOW IMG ======================

	    $scope.imageStrings = [];
	    $scope.processFiles = function(files) {
	      angular.forEach(files, function(flowFile, i) {
	        var fileReader = new FileReader();
	        fileReader.onload = function(event) {
	          var uri = event.target.result;
	          $scope.imageStrings[i] = uri;
						$scope.user.img = $scope.imageStrings[0];
						$scope.update($scope.user,'img');
	        };
	        fileReader.readAsDataURL(flowFile.file);
	      });
	    };

}
