class ParkingLot{
    constructor(){
        this.parkinglot = [];
    }

    addLevel(level,spots){
        let space = {
            level,
            spots: (spots)=>{
                console.log('1a');
                console.log(spots);
                let [motor,compact,large]=spots;
                console.log({motor,compact,large});
                return {motor,compact,large};
            }        
        };
        space.spots(spots);
        this.parkinglot.push(space);
    }

}

let x = new ParkingLot();
console.log(x.addLevel(1,[1,2,3]));
console.log(x.parkinglot);
console.log(x.parkinglot.spots);
