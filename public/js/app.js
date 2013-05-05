'use strict';

var GistBlog = angular.module('gistBlog', ['ngResource'])
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
			// var converter = new Showdown.converter();
			// 
			// return {
			// 	restrict: 'E',
			// 	link: function(scope, element, attrs) {
			// 		var htmlText = converter.makeHtml(scope.file.content);
			// 		element.html(htmlText);					
			// 	}
			// }
			// 		
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




