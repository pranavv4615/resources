// inorder

// inorder(node): L N R
//    if node is not null:
//        inorder(node.left)
//        visit(node)
//        inorder(node.right)


// preorder(node): N L R
//    if node is not null:
//        visit(node)
//        preorder(node.left)
//        preorder(node.right)

// postorder(node): L R N
//    if node is not null:
//        postorder(node.left)
//        postorder(node.right)
//        visit(node)

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function inorder(node) {
    // L N R
    if (node.left !== null && node.right !== null) {
        inorder(node.left)
        console.log(node.value)
        inorder(node.right)
    }
}

function preorder(node) {
    // L N R
    if (node !== null) {
        console.log(node.value)
        preorder(node.left)
        preorder(node.right)
    }

}

function postorder(node) {
    // L N R
    if (node !== null) {
        postorder(node.left)
        postorder(node.right)
        console.log(node.value)
    }

}


const root = new Node(1);
root.left = new Node(2);
console.log(root)
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(root)

console.log("Inorder Traversal")
inorder(root)

console.log("preorder Traversal")
preorder(root)

console.log("postorder Traversal")
postorder(root)
