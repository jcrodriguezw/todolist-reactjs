

import React from 'react'

const TodoList = props => {
    return(
        <div>
            <ol>
                {props.list.map((list,i) => <li key = {i}> {list.newtodo} </li>)}
            </ol>
        </div>
    )
}

export default TodoList;