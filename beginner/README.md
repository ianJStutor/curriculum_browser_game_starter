# Browser Game Starter (beginner)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Files

* <code>index.html</code> - Entry file for every web app
* <code>index.js</code> - JavaScript module for setting up an app
* <code>fullscreenCanvas.js</code> - JavaScript module for managing a full-screen canvas that self adjusts with browser window resizing

## Lessons

### 01 - HTML setup

1. In <code>index.html</code>, change the <code>title</code>. This is the first thing students see, anyway!
2. Review HTML syntax, data vs. metadata
3. Review important attributes for browser support and best practices:
    * <code>lang</code>
    * <code>dir</code>
    * <code>charset</code>
    * <code>viewport</code>
    * <code>icon</code> (optional, but suppresses nagging favicon error message)
4. Review the <code>canvas</code> element in the <code>body</code>
5. Add CSS:
    * <code>body { margin: 0; }</code> removes default eight pixels
    * <code>body { background: black; }</code> is (somewhat) optional, and other colors are, of course, possible. Note, however, that the JS code uses white text, so a black or very dark background is necessary...or reverse the text color for legibility
    * <code>canvas { position: absolute; }</code> allows for multiple canvases to stack on top of one another as needed by future games (game board and HUD overlay, for example); if only one canvas is being used, optionally <code>canvas { display: block; }</code> will suffice. This CSS correction is needed because <code>canvas</code> elements are inline by default, so there's always a small bit of inline-end character spacing, which causes horizontal scroll bars for full-screen canvases
6. Add <code>script</code> element:
    * Review <code>src</code> attribute; we'll be looking at <code>index.js</code> later
    * Review module pattern; note that modules will always be loaded after document parsing (but before the <code>DOMContentLoaded</code> event)

### 02 - Project engineering

1. In <code>index.js</code>, review the commented divisions
    * **dependencies** are required functions or libraries
    * **environment** variables are globals; in this case, both <code>canvas</code> and <code>ctx</code> will be used throughout the code base
    * **loop** is a single function that is called each animation frame; it is the main engine for the game, a delegator function that calls other functions
    * **init** is called when the JS is first executed; it's the main entry into the app
2. The <code>loop</code> function is subdivided:
    * The local environment variables <code>width</code> and <code>height</code> are pulled from the <code>canvas</code> on each iteration; this allows constant update even while the browser viewport is being resized
    * Erase the context
    * Draw something on the context. Note that the labeled code block is for testing only; it prints the pixel width and height of the canvas and updates even while the browser viewport is being resized. Change the text fill color to black for light background colors. This entire code block is intended to be deleted at the start of the actual project
    * Repeat continues the animation loop. In most games, this will be rewritten to allow for a pause or stopping of the animation loop, as needed
3. Review basic module syntax for the <code>import</code> statement and point out that the imported function is actually called in the environment section instead of the direct <code>canvas.getContext("2d")</code>