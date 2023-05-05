// 1
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}

let sum = 0;
for(let i in salaries){
  sum+=salaries[i];
}

console.log(sum);


// 2
let menu = {
width: 200,
height: 300,
title: "My menu"
};

function multiplyNumeric(obj){
  for(let i in obj){
    if (typeof obj[i] === 'number') obj[i]*=2;
  }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);


// 3
function checkEmailId(str){
  const aIndex = str.toLowerCase().indexOf("@");
  const bIndex = str.toLowerCase().indexOf(".");

  if(aIndex!=-1 && bIndex!=-1){
    if(aIndex<bIndex && (bIndex-aIndex)>1){
      return true;
    }
  }
  return false;
}
console.log(checkEmailId('helloWorld@gmail.com'));


// 4
function truncate(str, maxlength){
  let len = str.length;
  if(len>maxlength){
    str = str.slice(0,19)+"...";
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:" , 20));
console.log(truncate("Hi everyone!" , 20));


// 5
let arr = ["James", "Brennie"];
console.log(arr);
arr.push("Robert");
console.log(arr);
let len = arr.length;
if(len%2 != 0){
    arr[Math.floor(len/2)] = "Calvin";
}
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("Rose","Regal");
console.log(arr);
