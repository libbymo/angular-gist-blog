'use strict';

var GistBlog = angular.module('gistBlog', [])

	.config(function($routeProvider) {
	  $routeProvider
			.when('/', {
				controller: 'ListCtrl',
				templateUrl: 'views/list.html'
			})
			.when('/post/:id', {
				controller: 'PostCtrl',
				templateUrl: 'views/post.html'
			})
			.otherwise({ redirectTo: '/' })
		})
		
		.directive('markdown', function() {
			marked.setOptions({
			  gfm: true,
			});

			return {
				restrict: 'E',
				link: function(scope, element, attrs) {
					var htmlText = marked(scope.file.content);
					element.html(htmlText);					
				}
			}			
		});




