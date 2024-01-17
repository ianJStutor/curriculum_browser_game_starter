# Browser Game Starter (beginner)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Files

* <code>index.html</code> - Entry file for every web app
* <code>index.js</code> - JavaScript module for setting up an app
* <code>fullscreenCanvas.js</code> - JavaScript module for managing a full-screen canvas that self adjusts with browser window resizing

## Lessons

### 01 - <code>index.html</code>

1. Change the <code>title</code>. This is the first thing students see, anyway!
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
    * Review <code>src</code> attribute; we'll be creating <code>index.js</code> later
    * Review module pattern; note that modules will always be loaded after document parsing (but before the <code>DOMContentLoaded</code> event)