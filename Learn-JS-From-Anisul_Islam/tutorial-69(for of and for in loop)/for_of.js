const sports = ['Criket', 'Football', 'Balliball'];
for(let mysports of sports){
    console.log(mysports);
}

const student = {
    id : 1280737,
    name : 'Shahriar Rahman',
    Batch : 'WDPF'
}
console.log("--------------------------------------");
for(let mystudent in student ){
    // console.log(mystudent);
    // console.log(student[mystudent]);
    console.log(`${mystudent} : ${student[mystudent]}`)
}
