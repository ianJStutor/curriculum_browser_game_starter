# Browser Game Starter (expert)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Files

* <code>index.html</code> - Entry file for every web app
* <code>index.js</code> - JavaScript module for setting up an app
* <code>fullscreenCanvas.js</code> - JavaScript module for managing a full-screen canvas that self adjusts with browser window resizing

## Topics

* Data validation
* Dynamic event callback
* Debouncing

## Lesson notes

### 01 - Full-screen canvas module

1. The HTML/CSS and <code>index.js</code> files are not different from the beginner version.
2. Note that the <code>onResize</code> and <code>setDebounceDelay</code> functions are exported by <code>fullscreenCanvas.js</code> but not (yet) used or even imported in <code>index.js</code>.
3. The <code>callback</code> is an optional function with its own exported setter, <code>onResize</code>. If it exists, it's called in the lifecycle AFTER the canvas is resized in the <code>resize</code> function
4. The debouncer has a default delay of 100ms. Debouncing offers better performance for processing-heavy games, allowing for smoother resizing at the cost of temporary scroll bars. Point out that users have access to a setter function, <code>setDebounceDelay</code>. Setting <code>debounceDelay</code> to zero disables all debouncing