import React from 'react'

interface Props {
    children: React.ReactNode
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className='px-2 py-8 bg-white rounded-xl shadow-lg w-full md:shadow-none'>
            {props.children}
        </div>
    )
}

export default Card;