'use strict';

angular.module('spyglass', [])
  .config(function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  })
  .factory('spyglass', ['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
      return {
        initialize: function(trackingId, domain, options) {
          $window.ga('create', trackingId, domain, options);
        },

        trackPageview: function(path) {
          $window.ga('send', 'pageview', path);
        },

        trackPageviewsOnRouteChanges: function() {
          var self = this;
          $rootScope.$on('$routeChangeSuccess', function() {
            var path = $location.url();
            self.trackPageview(path);
          });
        },
      };
    }]);
