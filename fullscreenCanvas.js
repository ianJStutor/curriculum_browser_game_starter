var callbackBefore = null;
var callbackAfter = null;
var debouncer = null;
var debounceDelay = 100; //milliseconds

function fullscreenCanvas(canvas, window) {
    try {
        if (!canvas || !window) throw "Missing argument";
        if (!window.addEventListener ?? 
            !window.innerWidth ??
            !window.innerHeight) throw "Not a browser environment";
        if (!canvas.getContext ??
            !canvas.width ??
            !canvas.height) throw "Not a canvas element";

        resize();
        window.addEventListener("resize", e => {
            if (callbackBefore) callbackBefore(e);
            if (!debounceDelay) return resize(); //a debounceDelay of zero disables debouncing
            if (debouncer) clearTimeout(debouncer);
            debouncer = setTimeout(resize, debounceDelay);
        });

        function resize() {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            if (callbackAfter) callbackAfter({ width: innerWidth, height: innerHeight });
        }

        return canvas.getContext("2d");
    }
    catch(e) {
        return console?.error?.("fullscreenCanvas error:", error);
    }
}

function onBeforeResize(fn) {
    if ("function" !== typeof fn) return console?.error?.("fullscreenCanvas error:", "Argument to onBeforeResize() must be a function");
    callbackBefore = fn;
}

function onAfterResize(fn) {
    if ("function" !== typeof fn) return console?.error?.("fullscreenCanvas error:", "Argument to onAfterResize() must be a function");
    callbackAfter = fn;
}

/* setting ms to zero disables debouncing */
function setDebounceDelay(ms) {
    if ("number" !== typeof ms) return console?.error?.("fullscreenCanvas error:", "Argument to setDebounceDelay must be a number");
    debounceDelay = Math.abs(ms);
}

export { fullscreenCanvas, onBeforeResize, onAfterResize, setDebounceDelay };