import React from "react";
//Global State Data //I gave it a default 
export const ListContext = React.createContext([{
    key:"",
    title: "", 
    data:[{item:"", key:"",time:0}]
    }]);
export const ListUpdate =  React.createContext((arr)=>{});
