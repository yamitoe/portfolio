import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {Navbar} from './components/navbar';
import "./stylesheets/index.css"

class IndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            jsonData : [],
            bodyData: [],
            footerData: []
        };
    }

    componentDidMount(){
        //placeholder data //reminder that 'body'.json() is one of the methods
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response =>response.json())
        .then(json=>{
            console.log(json);
            let arr = [];
            let arr2 =[];
            for(let x = 0; x < 5;x++){
                //console.log(json[x].title);
                arr.push(<Navbar img={json[x].url} desc={json[x].title}
                key={x} className="small-icon"/>);
            }

            for(let x = 6; x < 11;x++){
                arr2.push(<Navbar img={json[x].url} desc={json[x].title}
                    key={x} className="big-icon"/>);
            }

            let test = json.map(x=>{
                if(json.indexOf(x) >= 4){
                    return null;
                }
                return(<Navbar img={x.url} desc={x.title}
                     className="small-icon"/>);
            })
            console.log(test);


            this.setState({jsonData: arr,bodyData : arr2, footerData: test}); 
        })
    }
 
    render(){
        return(
            <div>
                <header>
                    <section className="nav-bar">
                        <nav className="flex-container">{this.state.jsonData}</nav>
                    </section>
                </header>
                <main>
                    <section className="nav-image-container">
                        {this.state.bodyData}
                    </section>
                </main>
               <footer>
                    <section className="nav-bar">
                        <div className="footer-container">
                            {this.state.footerData}
                        </div>
                    </section>
               </footer>
                
            </div>
        );
    } 
}

ReactDOM.render(
    <IndexPage/>,
    document.getElementById("root")
);

