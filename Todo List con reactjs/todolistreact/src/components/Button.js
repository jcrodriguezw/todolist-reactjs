import React from 'react'

const Button = props => {
    return (
        <div className='button'>
            <input className='addtodo'type='button' value='Add To-Do' onClick={props.write}/>
        </div>
    )
}

export default Button;