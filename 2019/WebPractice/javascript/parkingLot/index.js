class ParkingLot{
    constructor(){
        this.parkinglot = [];
    }

    addLevel(level,spots){
        let specSpot = (spots)=>{
            let [motor,compact,large]=spots;
            return {motor,compact,large};
        }
        let spaces = specSpot(spots);
        this.parkinglot.push({level,spaces});       
    }
    //assume more than one entrance //At level 1 and level 5
    findClosetParking(level,carType){
        if(carType === 'motor'){
            return this.parkinglot.filter(val=>val.spaces[carType]);
        }
        else if(carType === 'car'){

        }
        else if(carType === 'bus'){

        }
    }

}

let x = new ParkingLot();
x.addLevel(1,[1,2,3]);
x.addLevel(2,[5,8,9]);
x.addLevel(3,[10,2,31]);
x.addLevel(4,[51,8,9]);
x.addLevel(5,[1,2,31]);

console.log(x.parkinglot);
console.log("The filter");

console.log(x.findClosetParking(1,'motor'));

