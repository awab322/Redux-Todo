export const addTodo = (data) => 
{
    return{
        type:"add_todo",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo = (id) => 
{
    return{
        type:"delete_todo",
        id:id
    }
}
 
export const deleteAllTodo = () => 
{
    return{
        type:"delete_all_todo"
    }
}