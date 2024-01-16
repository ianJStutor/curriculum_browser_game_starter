function fullscreenCanvas(canvas, window) {
    const ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);

    function resize() {
        const { innerWidth, innerHeight } = window;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    }

    return ctx;
}

export { fullscreenCanvas };