const Price_reducer =(state=125 ,action)=>{
    switch(action.type){
        case "MULTIPLY":
            return state * action.payload;
        default:
            return state;
    }

}

export default Price_reducer;