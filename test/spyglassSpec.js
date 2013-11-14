describe('spyglass', function() {
  var mock, spyglass, $location;

  beforeEach(function() {
    module('spyglass');

    mock = {ga: jasmine.createSpy()};

    module(function($provide) {
      $provide.value('$window', mock);
    });

    inject(function($injector) {
      $location = $injector.get('$location');
      $rootScope = $injector.get('$rootScope');
      spyglass = $injector.get('spyglass');
    });
  });

  describe('initialize', function() {
    it('passes the parameters through to ga', function() {
      var trackingId = 1;
      var domain = 2;
      var options = 3;
      spyglass.initialize(trackingId, domain, options);
      expect(mock.ga).toHaveBeenCalledWith('create', trackingId, domain, options);
    });
  });

  describe('trackPageview', function() {
    it('passes the path to ga', function() {
      var path = '/just/testing?some=param&another=one';
      spyglass.trackPageview(path);
      expect(mock.ga).toHaveBeenCalledWith('send', 'pageview', path);
    });
  });

  describe('trackPageviewsOnRouteChanges', function() {
    it('calls trackPageview when route changes', function() {
      var path = '/just/testing?some=param&another=one';
      spyOn(spyglass, 'trackPageview');
      spyglass.trackPageviewsOnRouteChanges();
      $location.url(path);
      $rootScope.$broadcast('$routeChangeSuccess');
      $rootScope.$digest();
      expect(spyglass.trackPageview).toHaveBeenCalledWith(path);
    });
  });
});
