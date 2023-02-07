import React from 'react'

import Actions from './actions/Index'

import { Index as Steps } from './steps/Index'

import Submit from './Submit'

const PageContainer = () => {
    return (
        <div className=' flex flex-col gap-4 justify-between min-h-screen'>
            <Steps />
            <Submit />
            <Actions />
        </div>
    )
}

export default PageContainer