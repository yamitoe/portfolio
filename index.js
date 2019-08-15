class Tree{
    constructor(){
        this.data = {root:null};
    }
    
    addNode(num){
        this.sortNode(num);
        
    }

    sortNode(num){
        if(this.data.root === null){
            console.log('test');
            //this.data.root = num;
            console.log('test');
        }
        console.log(this.data);
     
    }
}
function test(a,b){
return a*c;
}

let x = new Tree();
x.addNode(1);
