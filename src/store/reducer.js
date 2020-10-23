const reducer = (state,action)=>{
    let {type,payload} = action;
    switch(type){
        case "ADD":{
			let newList = state.list;
			var a = 0;
			var arr = [];
			newList.forEach(item => {
				arr.push(item.name);
                if(arr.indexOf(payload.name)==-1){
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