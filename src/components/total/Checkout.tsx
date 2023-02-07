import React from 'react'
import Plan from './Plan'
import AddOn from './AddOn'
import Total from './Total'

const Checkout = () => {
    return (
        <div className='bg-blue-100/30 rounded p-4 flex flex-col gap-4'>
            <Plan plan='Arcade' price={9} billing='monthly' />
            <div className='flex flex-col gap-3'>
                <AddOn title='Online service' price={1} />
                <AddOn title='Larger storage' price={2} />
            </div>
        </div>
    )
}

export default Checkout