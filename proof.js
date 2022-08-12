// let prueba={};
// const prueba2=Object.assign(prueba,{x:5})
// const prueba3=Object.assign(prueba,{t:6,h:8});
// const lista=[
//     {x:3,y:7},
//     {x:1,y:5},
//     {x:7,y:2},
//     {x:6,y:9},
//     {x:1,y:9}
// ]
// const prueba4=Object.assign(prueba,lista[lista.length-1])
// console.log(prueba)

// lista=[2,5,7,9,12,18,20];
// // console.log(lista.splice(3,2))

// lista=[{x:1,y:1}]
// function randomXY(){
//     return {
//         x: parseInt(Math.random()*100),
//         y: parseInt(Math.random()*100),
//     }
// }
// function ejecucion(){
//     lista.push(randomXY())
//     console.log(lista)
// };
// ejecucion()

let state={
    snake:[{x:1,y:2}]
}
let tail={};
let newTail=Object.assign(tail, state.snake[state.snake.length-1])
let newTail2=state.snake.push(tail)
console.log(newTail2)