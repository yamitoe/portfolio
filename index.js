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

        this.compareNodes(this.data,num)

        console.log(this.data);
     
    }

    compareNodes(node,num){
        while(node.root > num){
            if(node.left === undefined){
                node.left = {root: num};
            }
            if(node.left !== undefined){
                node = node.left;
            }
            else{
                return;
            }
        }
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
