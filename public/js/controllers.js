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
	
	console.log($scope.posts);
	
	$scope.readPost = function(id) {
		$location.url('/post/'+id);
	}
});

GistBlog.controller('PostCtrl', function ListCtrl($scope, $routeParams, $http) {
	// This will have to be a jsonp call to display the 
	// details of the post in html, so good luck with that.
	
	console.log("in postctrl")

	// var url = 'https://api.github.com/gists/' + $routeParams.id;  //5518980
	
	// $resource( url,
	//   {
	//     callback: 'JSON_CALLBACK'
	//   }, { get:{ method:'JSONP', isArray: true }})
	// .then( function(response) {  // then doesn't work. so figure that out if making a resource/factory
	// 	 $scope.post = response.data;
	// });
	
	
	$http.jsonp( 'https://api.github.com/gists/'+ $routeParams.id + '?callback=JSON_CALLBACK' )
		.then( function( response ) {
			console.log(response);
			$scope.post = response.data.data;
		});
	
});


GistBlog.controller('NavbarController', function NavbarController($scope, $location) {
  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };
});