import React from 'react'

import { Index as Steps } from './steps/Index'

import Submit from './Submit'

const PageContainer = () => {
    return (
        <div className='flex flex-col gap-4 min-h-screen'>
            <Steps />
            <Submit />
        </div>
    )
}

export default PageContainer