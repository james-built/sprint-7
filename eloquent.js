// Minimum
function min(a, b){
  if(a > b){
    return b}
  else{
    return a};
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
function isEven(n){
  if (n < 0) {
    n *= -1;
  }
  if (n == 0) {
    return true;
  } else if(n == 1) {
    return false;
  } else {
    return isEven(n-2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Bean Counting
function countBs(string){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] == "B"){
      count ++;
    }
  }
  return count;
}

function countChar(string, char){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] == char){
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4