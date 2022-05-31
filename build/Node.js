export class Node {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
    print() {
        console.log(this._value + " " + this._left + " " + this._right);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
}
