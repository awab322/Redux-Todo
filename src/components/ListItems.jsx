import React from 'react'
import { deleteTodo , deleteAllTodo } from "../redux/actions/index";
import { useSelector , useDispatch} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const ListItems = () => {

    const list = useSelector(state => state.TodoReducer.list)
    const dispatch = useDispatch()

    return ( list.length>=1 ? 
        <>
        <div className="list_card">
            <h2>Tasks Todo</h2>
            <div className="list_items">
                <ul>
                {
                    list.map((elem)=>
                    {
                        return (
                            <>
                                <li key={elem.id} className="single_li">
                                {/* <DeleteIcon/> */}
                                {elem.data}
                                <DeleteIcon className="delete_icon" onClick={()=>dispatch(deleteTodo(elem.id))} />
                                </li>
                                <br/>
                            </>
                        )
                    })
                }
                    
                </ul>
                {
                    list.length>1 ? <button className="btn btn-block shadow-none clear_all_button" onClick={()=>dispatch(deleteAllTodo())}>Remove All ({list.length})</button> : ""
                }
                {/* <button className="btn btn-block shadow-none clear_all_button" onClick={()=>dispatch(deleteAllTodo())}>Remove All</button> */}
            </div>
        </div>
            
        </> :
        ""
    )
}

export default ListItems
