import React from 'react'

const Descriptiontodo = props => {
    return (
        <div className='descriptiontodo'>
            <input className='placetodo'type='text' placeholder='Place'/> 
            <input className='datetodo'type='date'/> 
            <input className='timetodo' type='time'/>                
        </div>

    )
}

export default Descriptiontodo;