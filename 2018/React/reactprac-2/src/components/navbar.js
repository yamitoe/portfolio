import React from 'react';

export function Navbar(props){
    return(
        
        <figure>
            <a href="#" >
                <img src={props.img} alt={props.desc} className={props.className} />
                <figcaption className={props.className}>{props.desc}</figcaption>
            </a>
        </figure>
       
    )
}