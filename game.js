const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let estrelas = [];

for(let i = 0; i < 80; i++){
estrelas.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height
});
}

let player = {
x:280,
y:360,
width:40,
height:20
};

let meteoros = [];
let score = 0;

document.addEventListener("keydown", movePlayer);

function movePlayer(e){

if(e.key === "ArrowLeft"){
player.x -= 20;
}

if(e.key === "ArrowRight"){
player.x += 20;
}

}

function spawnMeteoro(){

let meteoro = {
x: Math.random() * 560,
y: 0,
size: 20,
speed: 3
};

meteoros.push(meteoro);

}

function gameLoop(){

ctx.fillStyle = "white";

estrelas.forEach(e =>{
ctx.fillRect(e.x,e.y,2,2);
});

ctx.clearRect(0,0,canvas.width,canvas.height);

// jogador
ctx.fillStyle = "cyan";

ctx.beginPath();
ctx.moveTo(player.x + 20, player.y);
ctx.lineTo(player.x, player.y + 20);
ctx.lineTo(player.x + 40, player.y + 20);
ctx.closePath();
ctx.fill();

// meteoros
ctx.fillStyle = "orange";

meteoros.forEach((m,index)=>{

m.y += m.speed;

ctx.beginPath();
ctx.arc(m.x,m.y,m.size,0,Math.PI*2);
ctx.fill();

// colisão
if(
m.x > player.x &&
m.x < player.x + player.width &&
m.y + m.size > player.y
){
alert("Game Over! Pontuação: "+score);
document.location.reload();
}

// remove se sair da tela
if(m.y > canvas.height){
meteoros.splice(index,1);
score++;
}

});

// pontuação
ctx.fillStyle="white";
ctx.font="20px Arial";
ctx.fillText("Score: "+score,10,25);

requestAnimationFrame(gameLoop);

}

// cria meteoros
setInterval(spawnMeteoro,1000);

gameLoop();