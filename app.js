
// Method 1
let s = "oneTwoThree"

let sNew=[];
let numWords=0;

sNew=s.split("");

let countCap=0;

for (let i=0; i<sNew.length; i++){
   if( sNew[i] == sNew[i].toUpperCase() ){
     countCap++;
     console.log(sNew[i])
   }
}

numWords=countCap+1;

// console.log(numWords)



// Method 2:
// let inputString = "saveChangesInTheEditor";
// function camelcase(s) {
//    let letterAmount = 0; 
//     for (var i = 0; i < s.length; i++) {
//        console.log(s.charAt(i));
//         let character = s.charAt(i);
//         if (character == character.toUpperCase()) {
//             letterAmount++;
//         }
//     }
// return letterAmount + 1;
// }
// let wordAmount = camelcase(inputString);
// console.log("the wordAmount is " + wordAmount);

