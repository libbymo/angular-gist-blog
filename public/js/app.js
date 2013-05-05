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
			.otherwise({ redirectTo: '/' });
	});




