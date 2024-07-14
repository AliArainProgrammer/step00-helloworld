"use strict";
//loops are use to run the code again and again on the same page it makes our work easier too.it comes from javascript.
//syntax for loop:
//for(loop initializer; loop condition; loop increment)
/* {
   statement
} */
//initialization means from where the loop starts, condition means how it begin, increment decrement means is used to update the value of i means if you eant to plus or minus the value or do another operation on it so you can do.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log("============================================");
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
//now we see how actullay lopp help us. we are noe generating tables by loops we will pass variable in loops by this syntax ${variable} and done but is we not want to chasnge variable again and again so we have to make a variable and set value now we change the value of variable and that's it.
for (let i = 0; i <= 10; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
}
for (let i = 0; i <= 10; i++) {
    const table = 5;
    console.log(`${table} * ${i} = ${table * i}`);
}
// ab ham ny kia ye ky bar bar value change karnay ky bajay ham ny ek variable alag sy banaya or us ki value set kar di ab jab bhi ham us variable ki value change karayn gy to table khud hi change ho jy ga.
// how we can break any loop lets see 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // it measns skip karwa dy ku ky wo number even hy jo purea divide ho jy ga.
    }
    else {
        console.log(i);
    }
}
