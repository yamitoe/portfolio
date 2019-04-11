let root = {
    key: null,
    leftChild: null,
    rightChild: null
};

function createTree(arr){
    for(let value of arr){
        compareNode(value);
    }
    return root;
}
//currKey is the path in string
function compareNode(key,currKey='key',path=""){
    //initialize root
    if(root.key == null){
        addNode(key);
    }
    else if(key < root[currKey]){
        if(root[currKey].leftChild == null){
            console.log("test");
            addNode(key,'leftChild',path);
        }
        else{
            
        }
    }
    else if(key > root.key){

    }
}

function addNode(key=null,value,path){
    //initialize root
    if(root.key == null){
        root.key = key
    }
    else{
        console.log("called?");
        console.log(path[value]);
        //not sure if bracket notation for accessor name
        root[path+value] = key;
    }

}
let myArr = [20,5];
let x = createTree(myArr);
console.log(x);