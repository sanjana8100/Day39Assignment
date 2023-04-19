// Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.

let array = []
let number = 130;
for (let i = 2; i < number ; i++) {
    while(number % i == 0){
      console.log(i," ");
    array.push(i)
      number /= i ;
    }
}
  if(number >= 2){
    console.log(number);
    array.push(number)
  }

console.log(array);