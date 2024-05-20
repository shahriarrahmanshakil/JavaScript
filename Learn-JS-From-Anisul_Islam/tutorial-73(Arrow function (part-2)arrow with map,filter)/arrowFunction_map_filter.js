const students = 
[
    {
        id : 101,
        name : "Shahriar Rahman",
        CGPA : 3.66
    },

    {
        id : 102,
        name : "Rahman",
        CGPA : 2.44
    },

    {
        id : 103,
        name : "Shahriar Shakil",
        CGPA : 2.12
    },

    {
        id : 104,
        name : "Shakil Babu",
        CGPA : 3.66
    }
]

// console.log(students);

//traditional function
function studentName(){
    return students.filter(function(x){
        return x.CGPA > 3;
    }).map(function(y){
        return y.name;
    });
}
console.log(studentName());

//with arrow function
const studentName1 = () => students.filter((x) => x.CGPA < 2.50).map((y) => y.name);
console.log(studentName1());