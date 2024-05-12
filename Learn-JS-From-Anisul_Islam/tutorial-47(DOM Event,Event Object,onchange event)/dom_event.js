// var input = document.querySelector("input");
// input.addEventListener('change', changehandler)



// function changehandler(event){
//     // console.log(event);
//     // console.log(event.type);
//     // console.log(event.target);
//     // console.log(event.target.className);
//     // console.log(event.target.value);
// }



// const plang = document.querySelectorAll("input[name='Plang']");
// console.log(plang);

// Array.from(plang).map((planguage) => {
//     planguage.addEventListener("change", function(event) {
//         if(event.target.checked){
//             console.log(event.target.value);
//         }
//     })
// })


const department = document.querySelector("#department");
    department.addEventListener('change', function(event){
        console.log(event.target.value);
    })
