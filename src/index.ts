import { Node } from "./Node.js";
import { BinaryTree } from "./BinaryTree.js";
import * as readlineSync from "readline-sync"
let choise;
let bintree=new BinaryTree();
while(true) {
    let choise2;
    if (choise === "exit") {
        break;
    }
    choise = readlineSync.question('\nControls panel' +
        '\n "add" if you want add element' +
        '\n "del" if you want delete element ' +
        '\n "get" if you want to find element in tree ' +
        '\n "show" if you want looking for you tree' +
        '\n "exit" if you want determine the program' +
        '\n\nEnter the command: ');
    switch (choise) {
        case "add": {
            choise2 = readlineSync.question('Enter element  ');
            bintree.add(choise2)
            console.log("Element was added")
            break;
        }
        case "del": {
            choise2 = readlineSync.question('Enter element  ');
            bintree.delete(choise2);
            break;
        }
        case "get": {
            choise2 = readlineSync.question('Enter element  ');
            let res = bintree.get(choise2)
            if (res === null) console.log("No this element  ")
            else console.log('I found:  ' + res);
            break;
        }
        case "show": {
            bintree.inorder();
            break;
        }
        case "exit": {
            break;
        }
        default: {
            console.log("try again  ")
            break;
        }
    }
}
