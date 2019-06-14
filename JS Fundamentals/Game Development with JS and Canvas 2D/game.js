(function main() {
    console.log("begin");
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let guy = { x: 400, y: 300 };

    window.addEventListener('keydown', move);

    function move(event) {
        console.log("move");
        switch (event.code) {
            case "ArrowLeft": guy.x -= 10; break;
            case "ArrowRight": guy.x += 10; break;
            case "ArrowUp": guy.y -= 10; break;
            case "ArrowDown": guy.y += 10; break;

        }

        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(guy.x, guy.y, 50, 50);
    }

})();
