# Spyglass
Easily add Google Analytics tracking to your AngularJS application. Currently just supports automatic pageview tracking on route changes.

## Install

Spyglass is easily installed using bower:

```bash
bower install spyglass --save
```

Then be sure to reference spyglass.js in your index.html file.

```html
<script src="/bower_components/spyglass/spyglass.js"></script>
```

## Usage

### tl;dr

Do this:

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .run(function(spyglass) {
    spyglass.initialize('UA-XXXXXXXX-X');
    spyglass.sendPageviewsOnRouteChanges()
  });
```

### Step by step

First, make sure your application module specifies spyglass as a dependency:

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

The `spyglass.initialize()` function also takes two optional domain and options parameters that specified like this:

```js
spyglass.initialize('UA-XXXXXXXX-X', 'yourdomain.com', {
  cookieDomain: 'none',
});
```

These parameters are passed straight to the Google Analytics `ga('create')` call so for more information please see [the relevant Google documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced#customizeTracker).

To enable the automatic pageview tracking on route changes then add a subsequent call to `spyglass.sendPageviewsOnRouteChanges()`:

```js
angular.module('yourAwesomeApp', ['spyglass'])
  .run(function(spyglass) {
    spyglass.initialize('UA-XXXXXXXX-X');
    spyglass.sendPageviewsOnRouteChanges()
  });
```

## Todo
* Abstract out the pageview tracking function and make it available through the spyglass service

* Implement event tracking
