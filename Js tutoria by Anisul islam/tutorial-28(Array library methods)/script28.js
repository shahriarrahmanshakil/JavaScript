var names = ["parveg", "aoyon","maruf",];
// document.write(names[2]);
names.shift();
// document.write(names);
names.unshift("Shakil");
// document.write(names);
names.splice(1,2,"Rahman","Shahriar");
// document.write(names);
names.splice(1,2);
// // document.write(names);
// var letter = ["B","C","D","G","H","A"];
// var assending = letter.sort();
// document.write(assending);
var num = [1,3,4,5,6,,7,9,7,5,3,2];
var numassen = num.sort(function(a,b){
                        return b-a;
})
document.write(num);














