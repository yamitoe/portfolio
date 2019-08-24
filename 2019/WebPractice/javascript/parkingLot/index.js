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
           /* let z =this.parkinglot.filter(val=>{
               let propArr =  Object.entries(val.spaces);
               let pass = propArr.some(w=>{
                    let [key,value] = w;
                    return (value > 0);
                })   
                return (pass===true);        
            })*/
            
           let t = this.parkinglot
            .map(val=>Object.entries(val.spaces))
           let test = t.flat();
            console.log('aa',t);

           /* .some(w=>{
                //let test = w.flat();
                console.log(w);
                //return (value > 0);
            })*/

        }
        else if(carType === 'car'){
            this.getFilterCar(val=>val.spaces[carType]>0);
        }
        else if(carType === 'bus'){
     
        }
    }
    getFilterCar(carType,func){
        return this.parkinglot.filter(func);
    }

}

let x = new ParkingLot();
x.addLevel(1,[0,2,3]);
x.addLevel(2,[5,0,9]);
x.addLevel(3,[10,2,0]);
x.addLevel(4,[51,8,9]);
x.addLevel(5,[0,0,0]);

console.log(x.parkinglot);
console.log("The filter");

console.log(x.findClosetParking(1,'motor'));
//console.log(x.findClosetParking(1,'car'));

