export const increment_Amount=()=>{
return{
    type:"INCREMENT"
}
}
export const decrement_Amount=()=>{
return{
    type:"DECREMENT"
}
}

export const multiply=(amount)=>{
return{
    type:"MULTIPLY",
    payload:amount
}
}