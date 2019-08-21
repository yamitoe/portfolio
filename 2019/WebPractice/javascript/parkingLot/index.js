class ParkingLot{
    constructor(){
        this.parkinglot = [];
    }

    addLevel(level,spots){
        let specSpot = (spots)=>{
            let [motor,compact,large]=spots;
            return {motor,compact,large};
        }
        let spaces =  specSpot(spots);
        this.parkinglot.push({level,spaces});       
    }

}

let x = new ParkingLot();
x.addLevel(1,[1,2,3]);
console.log(x.parkinglot);

