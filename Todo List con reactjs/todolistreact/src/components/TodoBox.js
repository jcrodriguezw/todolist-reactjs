import React from 'react'
import Inputnewtodo from './Inputnewtodo'
import Descriptiontodo from './Descriptiontodo'
import Button from './Button'
import TodoList from './TodoList'

const TodoBox = props => {


    return(
        <div className='workarea'>
            <div className='todoBox'>
                <Inputnewtodo live={props.live}/>
                <Descriptiontodo live={props.live} />
                <Button write={props.write}/>               
            </div>

            <div className='todoBox'>
                <TodoList list={props.list}/>
            </div>
        </div>
        
    )
}

export default TodoBox;