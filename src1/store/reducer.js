const reducer = (state,action)=>{
    let {type,payload} = action;
    switch(type){
        case "ADD":{
            let newList = state.list;
            var a = 0;
            newList.forEach(item => {
                if(item.name !== payload.name){
                    a=1;
                }else{
                    a=0;
                }
            });
            if(a==1){
                newList.push(payload);
            }
           
            return {
                ...state,
                list:newList
            }
        }
        default:return state;
    }
}

export default reducer;