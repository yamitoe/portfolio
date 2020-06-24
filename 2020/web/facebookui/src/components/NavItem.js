import React, {useState} from "react";
export function NavItem({img, ...props}){
    const [isOpen,setOpen] = useState(false);
    return(
        <li className="navitem">
            <a href="#" className="icon-button" onClick={()=>setOpen(open=>!open)}>
                {img}
            </a>
            {isOpen && props.children}
        </li>
    )
}

