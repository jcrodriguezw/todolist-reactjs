import React from 'react'

const Inputnewtodo = props => {



    return(
        <div className='inputnewtodo'>
            <input className='newtodo' type='text' placeholder='New To-Do' onChange={props.live}/>              
        </div>
    )
}

export default Inputnewtodo;
