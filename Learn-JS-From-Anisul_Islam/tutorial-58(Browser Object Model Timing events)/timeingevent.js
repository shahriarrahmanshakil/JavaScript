// setTimeout(() => {
//     console.log("Hello");
// },3000)

// setTimeout(time, 2000);

// function time(){
//     console.log("time function");
// }


const mybtn = document.querySelector('.mybtn');
const message = document.querySelector('.message');

mybtn.addEventListener('click', myfunction);

function myfunction(){
    message.textContent = "User Registration Succesfull";
    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}

const mybtn2 = document.querySelector('.mybtn2');
const message2 = document.querySelector('.message2');

mybtn2.addEventListener('click', myfunction2);

function myfunction2(){
    let count = 1;
    message2.textContent = count;

    setInterval(()=>{
        // count++;
        message2.textContent = count;
    },2000);
}

