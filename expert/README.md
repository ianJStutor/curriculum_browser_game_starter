# Canvas Starter (expert)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Files

* <code>index.html</code> - Entry file for every web app
* <code>index.js</code> - JavaScript module for setting up an app
* <code>fullscreenCanvas.js</code> - JavaScript module for managing a full-screen canvas that self adjusts with browser window resizing, utilizes optional debouncing, and offers lifecycle hooks

## Topics

* Module encapsulation
* Data validation
* Dynamic event callback
* Debouncing
* Lifecycle hooks

## Lesson notes

### 01 - Full-screen canvas module

1. The HTML/CSS and <code>index.js</code> files are not different from the beginner version except for the optional favicon, which uses a hack in order to avoid not-found errors (doesn't work in Safari?)
2. Note that the <code>onBeforeResize</code>, <code>onAfterResize</code>, and <code>setDebounceDelay</code> functions are exported by <code>fullscreenCanvas.js</code> and used in <code>index.js</code>
3. The debouncer has a default delay of 100ms. Debouncing offers better performance for processing-heavy games, allowing for smoother resizing at the cost of temporary scroll bars. Point out that users have access to a setter function, <code>setDebounceDelay</code>. Setting <code>debounceDelay</code> to zero (<code>setDebounceDelay(0)</code>) disables all debouncing
4. Lifecycle hooks; a common use case for these is to stop/pause the animation loop as soon as there's a resize event then resume once the resizing is completed
    * <code>onBeforeResize</code> - requires a callback function as an argument and sets it to <code>callbackBefore</code>. This callback function is called before any debouncing, meaning it's called with every window resize event, passing in the event object as a parameter
    * <code>onAfterResize</code> - requires a callback function as an argument and sets it to <code>callbackAfter</code>. This callback function is called after debouncing and after the canvas has been resized, passing in an object with the final canvas width and height