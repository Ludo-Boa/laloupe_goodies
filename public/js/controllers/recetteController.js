function recetteController($scope, recetteService) {
  $scope.showRecette = 'entree';
<<<<<<< HEAD
  $scope.closebtn = false;
=======
  $scope.closeBtnTab = [];
>>>>>>> origin/jerem
  $('body').css('background-image', 'none').css('background-image','url("./assets/testbg.jpg")');

  function load() {
		recetteService.get().then(function (res) {
			$scope.recettes = res.data;
		});
	}
	load();

  /*===================  Fonction bouton Recette  ========================= */

  $scope.bouton = function (n){
    angular.element($('#'+$scope.showRecette)).removeClass( "btn-info" ).addClass( "btn-warning" );
    angular.element($('#'+n)).removeClass( "btn-warning" ).addClass( "btn-info" );
    $scope.showRecette = n;
    console.log($scope.showRecette);
  }

  $scope.menuShow = function (n) {
    $scope.bouton(n);
    if (n == 'entree'){
      $('body').css('background-image', 'none').css('background-image','url("./assets/testbg.jpg")');
    }
    if (n == 'plat'){
      $('body').css('background-image', 'none').css('background-image','url("./assets/pasta.jpg")');
    }
    if (n == 'dessert'){
      $('body').css('background-image', 'none').css('background-image','url("./assets/dessertmenu.jpg")');
    }
  }

  /*==================  Fin Fonction bouton Recette  ===================== */

  /*===================  Fonction card  ========================= */

<<<<<<< HEAD
  $scope.boutbout =  function(){
      $(".ripple").addClass("rippling");
      $scope.closebtn = true;
      $(".button-wrapper").addClass("clicked").delay(1500).queue(function(){
          $(".layered-content").addClass("active");
          $scope.closebtn = true;
          console.log($scope.closebtn);
      });
  };

  $scope.closeButton = function(){
      $(".button-wrapper").removeClass("clicked");
      $(".ripple").removeClass("rippling");
      $(".layered-content").removeClass("active");
      $scope.closebtn = false;
=======
  $scope.boutbout =  function(wrapper,ripple,button,id){
      angular.element($(ripple)).addClass("rippling");
      angular.element($(wrapper)).addClass("clicked");
      angular.element($(button)).addClass("fadeenter");
      console.log(id);
      $scope.closeBtnTab[id] = 'closebtn'+id;

  };

  $scope.closeButton = function(wrapper,ripple,button,id){
      angular.element($(wrapper)).removeClass("clicked");
      angular.element($(ripple)).removeClass("rippling");
      // angular.element($(".layered-content")).removeClass("active");
      $scope.closeBtnTab[id] = false;
>>>>>>> origin/jerem
  };

  /*===================  END Fonction card  ========================= */

  $scope.i = 0;
  $scope.y = 0;
    $scope.add = function(type) {
      var datas = {};
      datas.img = $scope.imageStrings[0];
      datas.titre = $scope.titre;
      datas.description = $scope.description;
      datas.preparation = $scope.preparation0 + " Heure(s)   " + $scope.preparation1 + " Minute(s)";
      datas.cuisson = $scope.cuisson0 + " Heure(s)   " + $scope.cuisson1 + " Minute(s)";
      datas.ingredient = $scope.ingredient;
      datas.recette = $scope.recette;
      datas.type = type;
      recetteService.create(datas).then(function(res) {
        load();
      });
      $scope.img = [];
      $scope.titre = "";
      $scope.description = "";
      $scope.preparation = "";
      $scope.cuisson = "";
      $scope.ingredient = "";
      $scope.recette = "";
      $scope.type = "";
      $scope.i ++;
    };

  $scope.update = function(recette) {
    recette.service.update(recette._id, recette).then(function(res) {
      load();
    });
  }

  $scope.delete = function(recette) {
      recette.service.delete(recette._id, recette).then(function(res) {
        load();
      });
    },
    //  ------------   FLOW   -----------
  $scope.imageStrings = [];
  $scope.processFiles = function(files) {
    angular.forEach(files, function(flowFile, i) {
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var uri = event.target.result;
        console.log($scope.imageStrings[i]);
        $scope.imageStrings[i] = uri;
        $scope.y = 1;
      };
      fileReader.readAsDataURL(flowFile.file);
    });
  };
  $scope.cancel = function(image) {
    image.cancel();
    $scope.y = 0;
  }
}
