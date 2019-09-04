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
    //assume more than one entrance //At First, middle, and last level
    findClosetParking(level,carType){
        //filter only if .some returns true 
        if(carType === 'motor'){
            return this.parkinglot.filter(val=>Object.values(val.spaces).some(w=>w))
            .map(w=>w.level)
            .sort((w,a)=>{
                return Math.abs((w-level)) - Math.abs((a-level)) 
            });

            
        }
        else if(carType === 'car'){
            return this.parkinglot.filter(val=>Object.entries(val.spaces)
                .some(w=>{
                    let [key,value] = w;
                    if(key != 'motor' ){
                        return (value > 0);
                    }
                })
            )
            .map(w=>w.level)
            .sort((w,a)=>{
                return Math.abs((w-level)) - Math.abs((a-level)) 
            });
        }
        else if(carType === 'bus'){
            return this.parkinglot.filter(val=>Object.entries(val.spaces)
                .some(w=>{
                    let [key,value] = w;
                    if(key === 'large'){
                        return (value >= 5);
                    }
                })
            )
            .map(w=>w.level)
            .sort((w,a)=>{
                return Math.abs((w-level)) - Math.abs((a-level)) 
            });
        }

    }
}

export function sum(a, b) {
    return a + b;
  }


let x = new ParkingLot();
x.addLevel(1,[0,2,3]);
x.addLevel(2,[5,0,9]);
x.addLevel(3,[10,0,0]);
x.addLevel(4,[51,8,9]);
x.addLevel(5,[0,0,0]);
x.addLevel(6,[0,1,1]);

console.log(x.parkinglot);
console.log("The filter");
let fl= 3; //Will filter by car type, 
//then give back closet avaiable parking from where they came from
console.log('motor: ','Start at floor '+fl,x.findClosetParking(fl,'motor'));
console.log('car: ','Start at floor '+fl,x.findClosetParking(fl,'car'));
console.log('bus: ','Start at floor '+fl,x.findClosetParking(fl,'bus'));

//Note this only searches based on an arbitrary set of total available spaces, if I need more specific
//data like spotID, row, license plate I will need to make a parkingSpot class
//so instead of "spaces" being a total sum it would map to parkingSpot
//or use a database instead


