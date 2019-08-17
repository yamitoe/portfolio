class Tree{
    constructor(){
        this.data = {root:null};
    }
    
    addNode(num){
        if(this.data.root === null){
            this.data.root = num;
        }

        let prop = (this.data.root >= num) ? 'left' : 'right';
        this.sortNode(this.data,num,prop);
        
    }

    sortNode(node,num,prop){
        if(node[prop] === undefined){
            node[prop] = {root: num};
        }
        if(node[prop] !== undefined){
            node = node[prop];
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
