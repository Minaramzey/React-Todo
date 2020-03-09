import React from "react";
import Todo from "./Todo";

const TodoForm = props => {
    return (
        <div className= 'item-list'>
            {props.todos.map(item=> (
                <Todo 
                key={item.id} 
                item={item} 
                toggleItem={props.toggleItem}
                 />
            ))}
             <button className="clear-btn" onClick = {() => props.clearItem()}>
                Clear Completed
            </button>

        </div>
    )
}

export default TodoForm;