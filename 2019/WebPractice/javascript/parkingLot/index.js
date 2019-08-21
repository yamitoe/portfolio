class ParkingLot{
    constructor(){
        this.parkinglot = [];
    }

    addLevel(level,spots){
        let space = {
            level,
            spots: (spots)=>[...types]={spots}        
        };
        this.parkinglot.push(space);
    }

}

let x = new ParkingLot();
//console.log(x.addLevel(1).spots(1,2,3));
//console.log(x.parkinglot);
let test = (spots)=>{
    [motor,compact,large]=spots;
    return {motor,compact,large};
}
console.log(test([1,2,3]));