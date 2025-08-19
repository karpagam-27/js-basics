//  "use strict"
 abcd=10;
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
let ab= 20;
ab=15;
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

const{name:Name,job,skills,total}=person
console.log(Name,job,skills,total)
// person={}
const ad=17
if(!(ad>17))
  console.log("not eligible to vote")

// const array=[1,3,4,6,7,9]
getValue()


function getValue(){
  
   console.log("Karpagam");
}
const testValue= function(){
 getnewValue()
}

const getnewValue= function(){
  console.log("Karp");
}
testValue()
//////////////////
const a=10
function one(){
  const a=1;
  console.log(a);
  
  function two(){
    // const a=2;
      console.log(a);

     function three(){
      const a=3;
        console.log(a);

  }
   three()
  }
two()
}
one()
function getMyname(name){
  const altername=name.toLowerCase()

return altername
}

const elements= [1+2,2-1,10,5*2,5/2,getMyname("KS"),getMyname("KPUISA")]
elements[2]=10;
const element=["test"]
console.log(elements.map(function(ele){
   console.log(elements);
}));
const dummyArray=["Html"," ","Js","css","React","nodejs","tailwindcss","git"] 
console.log(dummyArray.includes(("css")));

const selectptag =document.querySelector(".heading")
console.log(selectptag)


const newbtn=document.querySelector(".btn")
console.log(newbtn)
newbtn.addEventListener("click",function(){
selectptag.textContent="Karpagam"
})


const newArray=["karpagam","developer","chennai"]
// const myname=newArray[0];
// const myrole= newArray[1];
// const myplace=newArray[2];
const [myname,myrole,myplace]=newArray
console.log(myname)
console.log(myrole)
console.log(myplace)

const arr1 = [7, 8, 9];
const badNewArray = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArray);
const goodNewArray = [1, 2, ...arr1];
console.log(goodNewArray);

const mynewvalue=["karpagam","developer",["java"]]

const newcopy= [...mynewvalue]
newcopy[0]="keerthi"
newcopy[2][1]="python"
  console.log(mynewvalue)
console.log(newcopy)
console.log(Object.entries (person))
console.log('karpagam'.lastIndexOf('a'))

const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);


const announcement =
  'All passangers come to boarding door 23. Boarding door 23!';


console.log(announcement.replaceAll('23', 'passanger'));



const capitalizeName = function (name) {
  
  const names = name.split(' ');



  const namesUpper = [];


  for (const n of names) {

    


    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); 
    
  }


  console.log(namesUpper.join(' '));
};


capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
const message = '8765232398766545';

console.log(message.slice(-4).padStart( message.length, '*'));
