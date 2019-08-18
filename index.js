class Tree{
    constructor(){
        this.data = {root:null};
    }
    
    addNode(num){
            this.sortNode(this.data,num);
    }

    addBatch(arr){
        for (const val of arr) {
            this.sortNode(this.data,val);
        }
    }

    inorder(node=this.data){
        if(node.left !== undefined){
            this.inorder(node.left);
        }
        console.log(node.root);
        if(node.right!==undefined){
            this.inorder(node.right);
        }
    }
    
    preorder(node=this.data){
        console.log(node.root);
        if(node.left !== undefined){
            this.preorder(node.left);
        }
        
        if(node.right!==undefined){
            this.preorder(node.right);
        }
        
    }

    postorder(node=this.data){
        if(node.left !== undefined){
            this.postorder(node.left);
        }

        if(node.right!==undefined){
            this.postorder(node.right);
        }
        console.log(node.root);
    }

    sortNode(node,num){
        let prop = (node.root >= num) ? 'left' : 'right';

        if(node.root === null){
            node.root = num;
        }
        else if(node[prop] === undefined){
            node[prop] = {root: num};
        }
        else if(node[prop] !== undefined){
            this.sortNode(node[prop],num)
        }

    }
}

let x = new Tree();
/*x.addNode(5);
x.addNode(1);
x.addNode(7);
x.addNode(4);
x.addNode(3);*/

x.addBatch([5,1,7,4,3,2,8,6])
console.log(JSON.stringify(x));
//x.inorder();
//x.preorder();
x.postorder();

