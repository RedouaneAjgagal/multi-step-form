import React from 'react'

import { Index as Steps } from './steps/Index'

import Submit from './Submit'

const PageContainer = () => {
    return (
        <div className='flex flex-col gap-4 min-h-screen md:flex-row md:bg-white md:p-4 md:rounded-xl md:justify-center md:w-full md:max-w-[70rem] md:m-auto md:grid md:grid-cols-3 md:min-h-[70vh]'>
            <Steps />
            <Submit />
        </div>
    )
}

export default PageContainer