class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

function getTreeHeight(root) {
    if (!root) {
        return 0
    }

    let left = 0
    let right = 0
    if (root.left) {
        left = getTreeHeight(root.left)
    }

    if (root.right) {
        right = getTreeHeight(root.right)
    }

    return Math.max(left, right) + 1
}

const root = new Node(20)
root.left = new Node(22)
root.right = new Node(12)
root.left.left = new Node(15)
root.left.right = new Node(33)
root.right.right = new Node(10)
root.right.right = new Node(10)
root.left.right.left = new Node(5)

console.log("Height of tree is:", getTreeHeight(root) - 1)
