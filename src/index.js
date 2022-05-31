"use strict";
exports.__esModule = true;
var duck_js_1 = require("./duck.js");
var fish_js_1 = require("./fish.js");
var readlineSync = require("readline-sync");
var fish = new fish_js_1.Fish();
var duck = new duck_js_1.Duck();
function doSwim(fishArg) {
    fishArg.swim();
}
doSwim(fish);
doSwim(duck);
doSwim({
    swim: function () {
        console.log("ololo");
    }
});
function f(id) {
    if (typeof id == "string") {
        id.split(",");
    }
}
readlineSync.question('Which program starts do you want? ', {
    defaultInput: 'firefox'
});
