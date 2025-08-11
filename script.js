//Variables


// Reserved Keywords are not allowed.(This will not work)
// const for = "karpagam"
// const if = 2344

//  This will work
const ford = "karpagam";
const ifa = 2344;
const fruit = null;

let eligibleToVote;
let age = 17;
if (age > 18) eligibleToVote = true;
else eligibleToVote = false;
console.log(eligibleToVote);

console.log(typeof ifa);


const array=["karpagam",567,{name:"keerthi"},{name:"john"},null]
const filArr= array.filter(function(e){return typeof e ==="object"&& e!==null})
console.log(filArr.map(function(ele){
//     if(5>10){
//  return ele.name
//     }    
 
//     console.log(ele.name)
  console.log(ele.name)
  return ele.name



}))

console.log("before",window.Test_age)
Test_age=26;
console.log("After",window.Test_age);
let a= 20;
a=15;
const b=10;
// b=20;
const marks=[100,98]
console.log("before",marks);
marks.push(78)
marks.push(69)
console.log("After",marks);

const person= {name: "karpagam"}
person.job="developer"
person.skills=["html","js"]
person.total= 600;
person.test={a:1, b:2}
console.log(person);
console.log(person.skills[1]);
console.log(person.test.a)
// person={}




