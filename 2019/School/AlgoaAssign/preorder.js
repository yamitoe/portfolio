let root = {
    key: null,
    leftChild: null,
    rightChild: null
};

function createTree(arr){
    for(let value of arr){
        addNode(value);
    }
}

function compareNode(key,currKey){
    if(key < currKey.key){
        if(currKey.leftChild === null){
            addNode()
        }
        else{
            compareNode(key,leftChild)
        }
    }
    else if(key > root.key){

    }


function addNode(key=null,leftChild=null.rightChild=null){
    if(root.key === null){
        root.key = key
    }
    else{
        compareNode(key,root.key);
    }
}
let myArr = [20,5,10,8,9,30,15,35];
let x = createTree(myArr);
console.log(x);