function createTree(key=null,leftChild=null,rightChild=null){
    let node = {
        key,
        leftChild,
        rightChild
    };
    return node;
}
let x = createTree("apple");
console.log(x);