const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const paswword = document.querySelector("div #password");

form.addEventListener('submit',formevent)



function formevent(fevent){
    fevent.preventDefault();
    const info = {
        name : name.value,
        email: email.value,
        paswword : paswword.value
    }
    console.log(info);
    name.value = "";
    email.value = "";
    paswword.value = "";
}