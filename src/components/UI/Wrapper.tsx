import React from 'react'
interface Props {
    children: React.ReactNode
}
const Wrapper: React.FC<Props> = (props) => {
    return (
        <div className='px-4 py-2 flex flex-col gap-6'>{props.children}</div>
    )
}

export default Wrapper