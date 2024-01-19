//dependencies
import { 
    fullscreenCanvas, 
    onBeforeResize, 
    onAfterResize, 
    setDebounceDelay 
} from "./fullscreenCanvas.js";

//environment
const canvas = document.querySelector("canvas");
const ctx = fullscreenCanvas(canvas, window);
onBeforeResize(pauseAnimation);
onAfterResize(init);
setDebounceDelay(50);

//state
var canAnimate;

//loop
function loop(t) {
    const { width, height } = canvas;
    //erase
    ctx.clearRect(0, 0, width, height);
    //draw
    testing: {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        canAnimate
            ? ctx.fillText(`${width}×${height}`, width*0.5, height*0.5)
            : ctx.fillText("paused", width*0.5, height*0.5);
    }
    //repeat
    if (canAnimate) requestAnimationFrame(loop);
}
function pauseAnimation() {
    canAnimate = false;
}

//init
function init() {
    canAnimate = true;
    requestAnimationFrame(loop);
}

//on page load
init();