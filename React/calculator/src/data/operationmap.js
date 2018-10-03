//map to hold all common operators that will change the same state value
export const operationMap={
    '+': (x,y)=>{return parseFloat(x)+parseFloat(y)},      
    '-': (x,y)=>{return parseFloat(x)-parseFloat(y)},
    'X': (x,y)=>{return parseFloat(x)*parseFloat(y)},
    '/': (x,y)=>{return parseFloat(x)/parseFloat(y)},   
}