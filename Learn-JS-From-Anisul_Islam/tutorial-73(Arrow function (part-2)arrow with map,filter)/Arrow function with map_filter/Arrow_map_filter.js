const student = [
    {
        id : 101,
        name : "Shahriar",
        cgpa : 3.78
    },
    {
        id : 102,
        name : "Rahman",
        cgpa : 3.08
    },
    {
        id : 103,
        name : "Rakib",
        cgpa : 2.55
    },
    {
        id : 104,
        name : "Raju",
        cgpa : 2.78
    },
    {
        id : 101,
        name : "Fima",
        cgpa : 3.50
    },
];
// console.log(student);

function data(){
    return student.filter((x) => x.cgpa > 3).map((y) => y.name);
}
console.log(data());
