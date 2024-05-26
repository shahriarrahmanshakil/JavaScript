// find()
let numbers = [5,55,14,5,78];
let firstEventNumber = numbers.find(x => x % 2 === 0);
console.log(firstEventNumber);

// findindex()
let mynumbers = [5,55,14,5,78];
let FirstEventNumberIndex = numbers.findIndex(x => x % 2 === 0);
console.log(FirstEventNumberIndex);

/////////////////////////////////////////////////////////

const studentinfo = [
    {
        id : 101,
        name : "Shahriar",
        CGPA : 3.50
    },
    
    {
        id : 102,
        name : "Rahman",
        CGPA : 4.00
    },

    {
        id : 103,
        name : "Shakil",
        CGPA : 2.00
    }
]

console.log(studentinfo.find(x => x.CGPA > 3));