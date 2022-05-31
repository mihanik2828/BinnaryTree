import { Node } from "./Node.js";
export class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        let temp = this.root;
        while (true) {
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = new Node(value);
                    temp.print();
                    return;
                }
                else
                    temp = temp.left;
            }
            if (value > temp.value) {
                if (temp.right === null) {
                    temp.right = new Node(value);
                    temp.print();
                    return;
                }
                else
                    temp = temp.right;
            }
            if (value == temp.value)
                return;
        }
    }
    get(value) {
        if (this.root == null) {
            return null;
        }
        let temp = this.root;
        while (true) {
            if (temp === null)
                return null;
            if (value < temp.value) {
                temp = temp.left;
                continue;
            }
            if (value > temp.value) {
                temp = temp.right;
                continue;
            }
            if (value === temp.value)
                return temp.value;
        }
    }
    getNode(value) {
        if (this.root == null) {
            return null;
        }
        let temp = this.root;
        while (true) {
            if (temp === null)
                return null;
            if (value < temp.value) {
                temp = temp.left;
                continue;
            }
            if (value > temp.value) {
                temp = temp.right;
                continue;
            }
            if (value === temp.value)
                return temp;
        }
    }
    findParentNode(node) {
        let value = node.value;
        if (this.root == null) {
            return null;
        }
        let temp = this.root;
        while (true) {
            if (temp === null)
                return null;
            if (temp.value === value)
                return null;
            if (temp.right && value === temp.right.value)
                return temp;
            if (temp.left && value === temp.left.value)
                return temp;
            if (value < temp.value) {
                temp = temp.left;
                continue;
            }
            if (value > temp.value) {
                temp = temp.right;
                continue;
            }
        }
    }
    ;
    isLeaf(node) {
        if (node.left && node.right)
            return true;
        else
            return false;
    }
    del(value) {
    }
    inorder() {
        if (this.root === null)
            return;
        this._inorderInternal(this.root);
    }
    _inorderInternal(currentNode) {
        if (currentNode === null)
            return;
        console.log(currentNode.value);
        this._inorderInternal(currentNode.left);
        this._inorderInternal(currentNode.right);
    }
    delete(value) {
        if (this.root === null)
            return;
        this.deleteNode(this.root, value);
    }
    deleteNode(currentNode, itemValue) {
        if (currentNode.value === itemValue) {
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }
            if (currentNode.left === null) {
                return currentNode.right;
            }
            if (currentNode.right === null) {
                return currentNode.left;
            }
            const minNodeInRightSubtree = this.findMinElement(currentNode.right);
            currentNode.value = minNodeInRightSubtree.value;
            // @ts-ignore
            currentNode.right = this.deleteNode(currentNode.right, minNodeInRightSubtree.value);
            return currentNode;
        }
        if (itemValue < currentNode.value) {
            if (currentNode.left === null) {
                console.log("Element not found");
                return currentNode;
            }
            // @ts-ignore
            currentNode.left = this.deleteNode(currentNode.left, itemValue);
            return currentNode;
        }
        if (itemValue > currentNode.value) {
            if (currentNode.right === null) {
                console.log("Element not found1");
                return currentNode;
            }
            // @ts-ignore
            currentNode.right = this._deleteNode(currentNode.right, itemValue);
            return currentNode;
        }
    }
    findMinElement(node) {
        if (node.left === null)
            return node;
        return this.findMinElement(node.left);
    }
}
