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
        //filter only if .some returns true 
        if(carType === 'motor'){
            let x = this.parkinglot.filter(val=>Object.values(val.spaces).some(w=>w))
            .map(w=>w.level);

            x.sort((w,a)=>{
                console.log(w%level ,a%level);
                return (w%level) - (a%level);
        
            });
            console.log(x);
            
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
            .map(w=>w.level);
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
            .map(w=>w.level);
        }

    }
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
let fl= 3;
console.log('motor','Start at floor '+fl,x.findClosetParking(3,'motor'));
console.log('car',x.findClosetParking(1,'car'));
console.log('bus',x.findClosetParking(1,'bus'));
//console.log(x.findClosetParking(1,'car'));

