"use strict";
//index                           0       1         2        3      4
const myfriendsname = ["Maaz", "Mubashir", "Pushkar", "Zuhaib", "Asad"];
console.log(myfriendsname);
//there are soo many mathods that we use in arrays first we use push.
//PUSH: it is use to add some other elements in arrays but if we add other type of elements in it it shows error like if we add number type to type string soo it gives error.
//                    5
myfriendsname.push("Bilal");
console.log(myfriendsname);
//but if we wnat to use more than one data types in one array so we can use but we use pipe to seperate them and then it will not give error.
let myfriendsnumbers = [1, 2, 3, 4, 5, 6];
console.log(myfriendsnumbers);
myfriendsnumbers.push("they all are equal");
console.log(myfriendsnumbers);
// we are using multiple values in one array now what if we want to take any one of them.if we want to do this we have to tell him index.
//Index: it is a number given to array value, starts from 0.
//Accessing array value 
console.log(myfriendsname[5], "accessing value bilal");
//if we want that no one can add another element in my array soo their is a keyword readonly that we use with datatype so push also not work.
const myfavouritegirlsname = ["alina", "saba", "ayesha", "diya"];
console.log(myfavouritegirlsname, "line 30");
//myfavouritegirlsname.push("sadia"); now push does not work because of keyword readonly. 
//console.log(myfavouritegirlsname);\
//if we want to cange specific element in any array so we can but we have to give his index value 
//Change any specific value 
const mymostfavouritegirlname = ["saba", "alina", "ayesha", "diya"];
mymostfavouritegirlname[0] = "Ilma";
console.log(mymostfavouritegirlname, "line 41");
// this method changes the design to like string
const fruits = ["banana", "mango", "orange", "peach", "apricot"];
console.log(fruits.toString(), "---string");
//this method give sequence to an array 
const vegetables = ["palak", "alou", "piyaz", "bhendi", "tori"];
console.log(vegetables.sort(), "sorting");
//this method teel you the lenght of array but it starts counting from 1 and index starts from 0 this is defference between them
const mangoes = ["chunca", "sindhri", "langra", "desi", "harami"];
console.log(vegetables.length - 1, "lenght");
