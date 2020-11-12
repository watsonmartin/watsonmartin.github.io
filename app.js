angular.module('app',[]).controller('mainController',function($scope, $log)
{
    $scope.adjective = '';
    $scope.pageIndex = 0; 
    
    $scope.aroundOrTown = function() {
        if (Math.random() < 0.5){
            return "around."
        }
        return "in town."
    };
    
    $scope.pages = [
        
        { pagename: "Home", index: 0},
        { pagename: "A Yearbook Look", index: 1},
        { pagename: "Cart Art", index: 2},
        { pagename: "The Mom Report", index: 3},
        { pagename: "Photo Gallery", index: 4},
        { pagename: "Our Favorite Quotes", index: 5}
        
    ];
    
    $scope.navBarClick = function(index) {
      $log.info("Clicked on index: " + index);  
      $scope.pageIndex = index;
    };
    
    $scope.slideIndex = 0; 
    
    $scope.slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"]; 
    
    $scope.advanceSlides = function(){
        $log.debug("slides advanced");
         $scope.slideIndex = ($scope.slideIndex + 1) % 4; 
    };
    
    
    $log.info($scope.pages); 
});