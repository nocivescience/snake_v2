const gameEl=document.getElementById('game');
const ctx=gameEl.getContext('2d');
gameEl.width=window.innerWidth;
gameEl.height=window.innerHeight;
const stateRunning=1;
const TICK=80;
const directionMap={
    'a':[-1,0],
    'd':[1,0],
    'w':[0,1],
    's':[0,-1]
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
    }
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
    Object.assign(tail,state.snake[state.snake.length-1])
}
tick();