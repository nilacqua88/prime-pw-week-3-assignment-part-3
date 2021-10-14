console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log('partsNeeded' , partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);
// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:' , supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let numberRemoved = supplyChanges.pop();
console.log(numberRemoved);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push('25');
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for (let x = 0; x<supplyChanges.length; x++){
    console.log( supplyChanges[ x ]);
  if (supplyChanges[ x ] > '0' ){
    console.log(`added parts`, supplyChanges );
} else if (supplyChanges[ x ] == '0') {
    console.log('No change.', supplyChanges);
} else
    console.log(`Removed Parts`, supplyChanges);
  }


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (parts of supplyChanges) {
    console.log('parts for supplyChange', parts);
   if (parts > '0'){
    console.log('parts for supplyChange');
   }
 }
// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
while (supplyChanges > '0'){
  console.log('We need these parts', supplyChanges);
  supplyChanges++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
let carParts = [3, 5, -6, 0, 7, 25];//I couldn't get the supplyChanges to work on this
// it was giving me the number 0. A couple of us went over it and then tried to rename the supplyChanges
//and this worked just fine. But we couldn't find the problem with supplyChanges. Any thoughts?
let sum = 0;
for (let i = 0; i < carParts.length; i++){
  sum += carParts[i];
}
console.log(sum);
