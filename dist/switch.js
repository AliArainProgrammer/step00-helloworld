"use strict";
// ye bhi conditions if if else ki tarah hi hota hy is ka likhnay ka andaaz thora change hy or ye direct kam karta hy jo value ho direct us par hi jata hy baki nahi dekhta kia likha hua hy.
Object.defineProperty(exports, "__esModule", { value: true });
let mynameis = "Ali";
switch (mynameis) {
    case "ali":
        console.log("ap ka name ali");
        break;
    case "Ali":
        console.log("ap ka name Ali");
        break;
    case "AliARAIN":
        console.log("ap ka name AliARAIN");
        break;
    default:
        console.log("name sahi batou");
        break;
}
