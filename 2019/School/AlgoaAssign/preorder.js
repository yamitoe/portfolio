function createTree(arr){
    let root = {
        key: null,
        leftChild: null,
        rightChild: null
    };

    for(let value of arr){
        compareNode(value,root);
    }
    return root;
}
//currKey is the path in string
function compareNode(key,root){
    console.log("Hi");
    console.log(root);
    //initialize root
    if(root.key === null){
        addNode(key,root);
    }//root will change paths //new root each iteration
    else if(key < root.key){
        if(root.leftChild === null){//If leftChild not assigned add node
            addNode(key,root,'leftChild');
        }
        else{//If leftChild has an assigned value //Move down a node
            console.log("Lwr");
            compareNode(key,root.leftChild);
        }
    }
    else if(key > root.key){
        if(root.rightChild === null){//If rightChild not assigned add node
            addNode(key,root,'rightChild');
        }
        else{//If rightChild has an assigned value //Move down a node
            compareNode(key,root.rightChild);
        }
    }
}

function addNode(key,root,parameter){
    //initiliaze root
    if(root.key === null){
        root.key = key
    }
    else{
        root[parameter] = {
            key,
            leftChild: null,
            rightChild: null
        };
    }

}
let myArr = [20,21,5,2,1,0];
let x = createTree(myArr);
console.log(JSON.stringify(x));
//console.log(x.leftChild.leftChild);