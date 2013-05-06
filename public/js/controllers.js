GistBlog.controller('ListCtrl', function ListCtrl($scope, $location, $http) {
	
	$http({method: 'GET', url: 'https://api.github.com/users/libbymo/gists'})
	  .success(function(data, status, headers, config) {
			$scope.posts = data;					
	  })
	  .error(function(data, status, headers, config) {
			$scope.error("Something went amiss.");
	  });
	
	$scope.readPost = function(id) {
		$location.url('/post/'+id);
	}
	
});

GistBlog.controller('PostCtrl', function ListCtrl($scope, $routeParams, $http, $location) {
	
	$http.jsonp( 'https://api.github.com/gists/'+ $routeParams.id + '?callback=JSON_CALLBACK' )
		.then( function( response ) {
			$scope.post = response.data.data;
			$scope.editUrl = response.data.data.html_url;
		});
			
	$scope.navBack = function() {
		$location.url('/list');
	}
	
});