let prueba={};
const prueba2=Object.assign(prueba,{x:5})
const prueba3=Object.assign(prueba,{t:6,h:8});
const lista=[
    {x:3,y:7},
    {x:1,y:5},
    {x:7,y:2},
    {x:6,y:9},
    {x:1,y:9}
]
const prueba4=Object.assign(prueba,lista[lista.length-1])
console.log(prueba)