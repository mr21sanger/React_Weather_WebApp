import React from 'react'

function Other({ classes, detail, name }) {
    return (
        <div className="w-24 h-20 text-center py-2"  >
            <i className={`${classes} text-white  text-2xl`}></i>
            <p className='font-semibold text-sm text-black'>{`${detail}`}</p>
            <p className='font-bold text-md text-black'>{`${name}`}</p>
        </div>
    )
}

export default Other
