class Tree{
    constructor(){
        this.data = {root:null};
    }
    
    addNode(num){
        if(this.data.root === null){
            this.data.root = num;
        }
        else{
            this.sortNode(this.data,num);
        }
    }

    sortNode(node,num){
        let prop = (node.root >= num) ? 'left' : 'right';

        if(node[prop] === undefined){
            node[prop] = {root: num};
        }
        if(node[prop] !== undefined){
            node = node[prop];
            //this.sortNode(node,num,prop)
        }
        else{
            return;
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
console.log(x);
