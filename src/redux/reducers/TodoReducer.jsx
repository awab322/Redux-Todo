const initialData={
    list:[]
}

export const TodoReducer = (state=initialData , action) => 
{
    
    if(action.type=="add_todo")
    {
        const {id , data} = action.payload;
        return{
            // ...state,
            list:[
                ...state.list,
                    {
                    id:id,
                    data:data
                    }
                 ]
              }
    }
    else if(action.type=="delete_todo")
    {
        const newList = state.list.filter((elem)=>elem.id !== action.id)

        return{
            // ...state, 
            list: newList
        }
    }
    else if(action.type=="delete_all_todo")
    {
        return {
            ...state,
            list:[]
        }
    }
    else
    {
        return state
    }
}
