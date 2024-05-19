
// function info1(name,age){
//     return{
//         name : name,
//         age : age
//     }
// }
// console.log(info1('Shahriar Rahman Shakil', 27));



//Object Litrals //ES-6
function info1(name,age){
    return{
        name,
        age
    }
}
console.log(info1('Shahriar Rahman Shakil', 27));


// let message = {
//     body : function(){
//         return `Hi this is object function`
//     }
// }
// console.log(message.body());

//Consies method
let message = {
    body(){
        return `Hi this is object function`
    }
}
console.log(message.body());


let myfunction = {
    'my message'(){
        return `Hello I am function`
    }
}
console.log(myfunction['my message']());
