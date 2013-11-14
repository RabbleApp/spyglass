# Spyglass
Easily add Google Analytics tracking to your AngularJS application.

## Install

Spyglass is installed using bower:

```bash
bower install spyglass --save
```

Then be sure to reference spyglass.js in your html file.

```html
<script src="/bower_components/spyglass/spyglass.js"></script>
```

## Usage

### Initialization

First, make sure your application module specifies the spyglass module as a dependency:

```js
angular.module('yourAwesomeApp', ['spyglass'])
```

Then add the spyglass service as a dependency in your application module's run block. Inside the run block, add a call to `spyglass.initialize()`, specifying your tracking id like so:

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .run(function(spyglass) {
    spyglass.initialize('UA-XXXXXXXX-X');
  });
```

The `spyglass.initialize()` function can also take two optional domain and options parameters that are specified like so:

```js
spyglass.initialize('UA-XXXXXXXX-X', 'yourdomain.com', {
  cookieDomain: 'none',
});
```

These parameters are passed straight through to the Google Analytics `ga('create')` call so for more information please see [the relevant Google documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced#customizeTracker).

### Manual pageview tracking

To manually track a pageview in your controller, inject the spyglass service and then call the `spyglass.trackPageview()` method with the path you want to track:

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .controller('UnicornController', function(spyglass) {
    spyglass.trackPageview('/unicorns/12345/rainbows');
  });
```

### Automatic pageview tracking

Automatic pageview tracking tracks a pageview with the new url whenever the route changes. To enable the automatic pageview tracking, add a call to `spyglass.trackPageviewsOnRouteChanges()` just after the `spyglass.initialize()` call in your run block:

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .run(function(spyglass) {
    spyglass.initialize('UA-XXXXXXXX-X');
    spyglass.trackPageviewsOnRouteChanges()
  });
```

### Event tracking

To track an event in your controller, inject the spyglass service and then call the `spyglass.trackEvent()` with the `category`, `action`, `label` and `value` you want to send. Only the `category` and `action` parameters are required. These parameters are passed straight through to the Google Analytics `ga('send', 'event')` call so for more information please see [the relevant Google documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/events).

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .controller('UnicornController', function(spyglass) {
    spyglass.trackEvent('mane', 'brushed');
  });
```
