export class Node<T> {
  private _value : T;
  private _left : Node<T> | null;
  private _right : Node<T> | null;

  constructor(value: T) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  print(){
    console.log(this._value+" "+ this._left+ " " + this._right);
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }

  get left(): Node<T> | null {
    return this._left;
  }

  set left(value: Node<T> | null) {
    this._left = value;
  }

  get right(): Node<T> | null {
    return this._right;
  }

  set right(value: Node<T> | null) {
    this._right = value;
  }





}
