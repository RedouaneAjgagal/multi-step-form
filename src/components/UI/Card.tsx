import React from 'react'

interface Props {
    children: React.ReactNode
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className='px-4 py-10 bg-white rounded-xl shadow-lg w-full'>
            {props.children}
        </div>
    )
}

export default Card