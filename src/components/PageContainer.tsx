import React from 'react'
import Card from './UI/Card'
import Actions from './actions/Index'

import { Index as Steps } from './steps/Index'
import { Index as PersonalInfo } from './personal-info/Index'
import { Index as Plans } from './plans/Index'
import { Index as AddOns } from './add-ons/Index'
import { Index as Total } from './total/Index'
import { Index as Thankyou } from './thank-you/Index'

const PageContainer = () => {
    return (
        <div className='bg-blue-300/50 flex flex-col min-h-screen relative'>
            <Steps />
            <section className='px-4 flex flex-col justify-between items-center'>
                <Card>
                    {/* <PersonalInfo /> */}
                    {/* <Plans /> */}
                    {/* <AddOns /> */}
                    {/* <Total /> */}
                    <Thankyou />
                </Card>
                <div className='absolute bottom-0 w-full'>
                    <Actions />
                </div>
            </section>
        </div>
    )
}

export default PageContainer