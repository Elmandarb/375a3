var canvas = undefined;
var gl = undefined;
var time = 0.0;

    function init() {
        canvas = document.getElementById("canvas");
        gl = canvas.getContext("webgl2");

        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.enable(gl.DEPTH_TEST);

        cube = new Cube(gl);

        cube.P = mat4();
        cube.MV = mat4();

        render();
    }

    function render() {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        time += 1.0;

        cube.MV = rotateY(time);
        

        cube.render();

        requestAnimationFrame(render);
    }

    window.onload = init;