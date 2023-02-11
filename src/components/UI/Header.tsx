import React from 'react'
interface Props {
    title: string,
    description: string
}
const Header: React.FC<Props> = (props) => {
    return (
        <article className='flex flex-col gap-4'>
            <h1 className='font-bold tracking-wide text-3xl text-slate-900'>{props.title}</h1>
            <p className='text-gray-500/80'>{props.description}</p>
        </article>
    )
}

export default Header