/* preorder, inorder, postorder  */

class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

function preorder(root) {
    // root, left, right
    console.log(root.value)
    if (root.left) {
        preorder(root.left)
    }

    if (root.right) {
        preorder(root.right)
    }
}

function postorder(root) {
    // left, right, root
    if (root.left) {
        postorder(root.left)
    }

    if (root.right) {
        postorder(root.right)
    }

    console.log(root.value)

}

function inorder(root) {
    // left, root, right
    if (root.left) {
        inorder(root.left)
    }

    console.log(root.value)

    if (root.right) {
        inorder(root.right)
    }

}

const root = new Node(20)
root.left = new Node(22)
root.right = new Node(12)
root.left.left = new Node(15)
root.left.right = new Node(33)
root.right.right = new Node(10)

console.log("PREORDER: ")
preorder(root)

console.log("INRODER: ")
inorder(root)

console.log("POSTORDER: ")
postorder(root)

