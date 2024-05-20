window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //resizing canvas to full-screen
    resizeCanvas(canvas);

    //variables
    let isPainting = false;

    function startDrawing() {
        isPainting = true;
        ctx.beginPath();
    }

    function finishDrawing() {
        isPainting = false;
        ctx.closePath();
    }

    function draw(e) {
        if (!isPainting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", finishDrawing);
    canvas.addEventListener("mousemove", draw);

})

window.addEventListener("resize", () => resizeCanvas(document.getElementById("canvas")))


function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}