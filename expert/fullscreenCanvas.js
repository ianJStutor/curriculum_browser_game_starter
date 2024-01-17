var callback = null;
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
        window.addEventListener("resize", () => {
            if (!debounceDelay) return resize(); //a debounceDelay of zero disables debouncing
            if (debouncer) clearTimeout(debouncer);
            debouncer = setTimeout(resize, debounceDelay);
        });

        function resize() {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            if (callback) callback({ width: innerWidth, height: innerHeight });
        }

        return canvas.getContext("2d");
    }
    catch(e) {
        return console?.error?.("fullscreenCanvas error:", error);
    }
}

function setResizeCallback(fn) {
    if ("function" !== typeof fn) return console?.error?.("fullscreenCanvas error:", "Argument to setResizeCallback() must be a function");
    callback = fn;
}

/* setting ms to zero disables debouncing */
function setDebounceDelay(ms) {
    if ("number" !== typeof ms) return console?.error?.("fullscreenCanvas error:", "Argument to setDebounceDelay must be a number");
    debounceDelay = Math.abs(ms);
}

export { fullscreenCanvas, setResizeCallback, setDebounceDelay };