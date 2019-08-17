class Tree{
    constructor(){
        this.data = {root:null};
    }
    
    addNode(num){
        this.sortNode(num);
        
    }

    sortNode(num){
        let currentNode = this.data;
        let prop;
        if(currentNode.root === null){
            currentNode.root = num;
        }
        else if(this.data.root < num){
            currentNode.right = {root: num};
        }

        while(currentNode.root > num){
            if(currentNode.left === undefined){
                currentNode.left = {root: num};
                console.log('checking temp Node'+currentNode.left);
                console.log('a'+ JSON.stringify(this.data));
            }
            if(currentNode.left !== undefined){
                currentNode = currentNode.left;
            }
            else{
                return;
            }
        }

        console.log(this.data);
     
    }
}
function test(a,b){
return a*c;
}

let x = new Tree();
x.addNode(5);
x.addNode(1);
x.addNode(7);
x.addNode(4);
