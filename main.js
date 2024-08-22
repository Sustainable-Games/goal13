let canvas = document.getElementById('game-board');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'gray';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function sizeCanvas() {
    if(window.innerHeight >= (9*window.innerWidth/16)) {
        canvas.width  = window.innerWidth;
        canvas.height = Math.floor(9*canvas.width/16);
    }
    else {
        canvas.height = window.innerHeight;
        canvas.width  = Math.floor(16*canvas.height/9);
    }
    ctx = canvas.getContext("2d");
}

