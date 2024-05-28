"use strict";
// arthemetic operators are (+,-,*,/,%,**,++,--). Thet are use for simple calculation
let Myapplicationfunding = 0;
//Add Funds
const google = 200000;
const investor = 500000;
const facebook = 1000000;
const alonmusk = 10000000;
Myapplicationfunding = google + investor + facebook + alonmusk; //11,700,000
console.log('total funds you get =', Myapplicationfunding);
//pehlay ham ek keyword ka istmaal kar ky variable m value store karty hn phir us ki value ko time to time change karnay ky liye ham operators ka istmaal karty hn, ham baki values ko add kar ky keyword m store kar dety hn is tarah us ki value kam ya zyada hoti rehti hy.
let fundinginvestmentincompany = 0;
//Start investment
const cloudspace = 700000;
const marketing = 1000000;
const employes = 5000000;
fundinginvestmentincompany = cloudspace + marketing + employes;
console.log('total funds invested =', fundinginvestmentincompany);
let remaningfunds = Myapplicationfunding - fundinginvestmentincompany;
console.log('funds remainig =', remaningfunds);
console.log('funds dobule ho gy', remaningfunds ** 2); // exponent operator
// PRE INCREMENT
// ap ko ap ka amount denay sy pehly hi jitnay percent increase hua hy ap ko dyn gy 
let profit = 25000000000000;
console.log('pre increment', ++profit);
//POST INCREMENT
// ap ka amount ap ko baad my milay ga pehlay ap ko hamara kam karna ho ga matlab is m result end m 2 ana hy lakin 1 hi ay ga baki baad m milay ga
console.log('post increment', profit++);
console.log('post increment', profit); // ye baad m mila
//OPERATORS PRANTHESIS
// Is ka matlab hota hy kis ko zyada tarjeeh deni hy ab operators m ham ny dekha ky +, -, *, / hi hotay hn to lazmii si baat hy in m sy hi kisi to tarjeeh deni ho gi ab BOARDMAS rule ky hisaab sy sab sy pehlay ham brackets ko solve kartay hn phir (power ya roots) phir division, multiplication addition, or subtraction. isis rule ko ham programming m bhi foolw kartay hn.
let x = (100 / 50) + (3 * 7);
console.log('Final result =', x);
// is m ham ny sab sy pehlay jis ko tarjeeh di wo division hy phir multiply karwaya or phir dono ky answers ko plus karwa diya or print kar diya.
let y = 100 + 5 * 5;
console.log('Final result =', y);
//matlab answer to sahi hi dy raha hy lakin ek tajarby walay ko aesy kan nahi karna.
