const gameEl=document.querySelector('canvas');
const ctx=gameEl.getContext('2d');
gameEl.width=window.innerWidth;
gameEl.height=window.innerHeight;
const stateRunning=1;
const stateLosing=2;
const growScale=10;
const TICK=80;
const squareSize=10;
const directionMap={
    'a':[-1,0],
    'd':[1,0],
    'w':[0,-1],
    's':[0,1]
};
let state={
    snake:[{x:0,y:0}],
    direction:{x:1,y:0},
    prey:{x:1,y:1},
    growing:0,
    runState:stateRunning,
}
window.onload=function(){
    window.onkeydown=function(e){
        const direction= directionMap[e.key]
        if(direction){
            const [x,y]=direction;
            if(-x!==state.direction.x&&-y!==state.direction.y){
                state.direction.x=x;
                state.direction.y=y;
            }
        }
    };
    tick();
}
function randomXY(){
    return {
        x:parseInt(Math.random()*gameEl.width),
        y:parseInt(Math.random()*gameEl.height)
    }
}
function tick(){
    const head=state.snake[0]
    const dx=state.direction.x;
    const dy=state.direction.y;
    const highestIndex=state.snake.length-1;
    let tail={};
    let interval=TICK;
    Object.assign(tail,state.snake[state.snake.length-1]);
    let didScore=(
        head.x===state.prey.x&&head.x===state.prey.y&&head.y
    )
    if(state.runState===stateRunning){
        for(let idx=highestIndex;idx>-1;idx--){
            const sq=state.snake[idx];
            if(idx===0){
                sq.x+=dx;
                sq.y+=dy;
            }else{
                sq.x=state.snake[idx-1].x;
                sq.y=state.snake[idx-1].y;
            }
        }
    }else if(state.runState===state.stateLosing){
        interval=10;
        if(state.snake.length>0){
            state.snake.aplice(0,1)
            state.snake.push(randomXY())
            state.prey=randomXY();
        }
    }
    if(detectCollision()){
        state.runState=stateLosing;
        state.growing=0;
    };
    if(didScore){
        state.growing+=growScale;
        state.prey=randomXY();
    }
    if(state.growing>0){
        state.snake.push(tail);
        state.growing-=1;
    }
    requestAnimationFrame(draw);
    setTimeout(tick,interval)
}
function detectCollision(){
    const head=state.snake[0];
    if(
        head.x<0||
        head.x>=gameEl.width||
        head.y<0||
        head.y>=gameEl.height
    ){
        return true
    }
    for(var idx=1;idx<state.snake.length;idx++){
        const sq=state.snake[idx];
        if(sq.x===head.x&&sq.y===head.y){
            return true
        }
    }
    return false
}
function drawPixel(color,x,y){
    ctx.fillStyle=color;
    ctx.fillRect(
        x*squareSize,
        y*squareSize,
        squareSize,
        squareSize
    )
}
function draw(){
    ctx.clearRect(0,0,gameEl.width,gameEl.height);
    for(var idx=0;idx<state.snake.length;idx++){
        const {x,y}=state.snake[idx];
        drawPixel('red',x,y)
    }
    const {x,y}=state.prey;
    drawPixel('yellow',x,y)
}