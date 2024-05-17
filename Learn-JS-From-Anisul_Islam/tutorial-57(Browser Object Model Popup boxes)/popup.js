// alert("!alert");
// confirm("are you sure");
// prompt("promt");

// function deleteSomething(){
//     let value = confirm("Do you want to Delete?");
//     if(value){
//         console.log("Deleted");
//     }else{
//         console.log("Not Deleted");
//     }
// }
// deleteSomething();



// prompt

    function wellcomemessage(){
        let h1 = document.createElement('h1');
        let text;

        let name = prompt("Enter you'r name");
        if(name == null || name == ''){
            text = "No Name Found"
        }else{
            text = "Well-Come " + name;
        }
        let textnode = document.createTextNode(text);
        h1.appendChild(textnode);
        document.body.appendChild(h1);
    }
    wellcomemessage();


