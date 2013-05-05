GistBlog.controller('ListCtrl', function ListCtrl($scope, $location, $http) {
	// in the list get the url for the one to display
	
	$http({method: 'GET', url: 'https://api.github.com/users/libbymo/gists'})
	  .success(function(data, status, headers, config) {  // get this into a resource instead of making two calls?
	    // this callback will be called asynchronously
	    // when the response is available
			$scope.posts = data;
			console.log(data);
					
	  })
	  .error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	
	
	$scope.readPost = function(id) {
		$location.url('/post/'+id);
	}
});

GistBlog.controller('PostCtrl', function ListCtrl($scope, $routeParams, $http, $location) {
	
	$http.jsonp( 'https://api.github.com/gists/'+ $routeParams.id + '?callback=JSON_CALLBACK' )
		.then( function( response ) {
			$scope.post = response.data.data;
			console.log( response.data.data );
			$scope.editUrl = response.data.data.html_url;
		});
			
	$scope.navBack = function() {
		$location.url('/list');
	}
	
});


GistBlog.controller('NavbarController', function NavbarController($scope, $location) {
  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };
});