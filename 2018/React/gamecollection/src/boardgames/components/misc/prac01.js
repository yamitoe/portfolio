//Mini Practice Problems
import React, {Component} from 'react';
class Prac extends Component {
    constructor(props){
        super(props);
        this.parkingSpace = 0;
        this.floors=7;
        this.carType=0;
    }
    parkingSpaceq = this.props.parkingSpace;
    floorsq = this.props.floors;
    carTypeq = this.props.carType;
   render(){
    console.log(this.floors);
       return(
        <div>aa</div>
       );
   }
}
//let x = new Prac();


export default Prac;