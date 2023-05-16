let n = 25;
let stars = "";
for (let i = 1; i <= n; i++) {      //  "i = 1" is my starting point, i <= n" is my range and "i++" is an increment
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);


/* 
   -To create the tree i had to use 2 for loops, 
    1 external that will take care of the columns 
    and 1 internal that will print rows of the stars.

   -I had to declare a variable "n" that will take the 
    number of times the program should run. The internal 
    loop will run according to the external loop. 
   
   -The internal loop will run 1 time in the 1st execution 
    of the external loop until, then adds 1 during the 2nd 
    execution untill it reaches "n" times.
*/
