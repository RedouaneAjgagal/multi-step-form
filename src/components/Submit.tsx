import React from 'react'
import Card from './UI/Card'

import { Index as PersonalInfo } from './personal-info/Index'
import { Index as Plans } from './plans/Index'
import { Index as AddOns } from './add-ons/Index'
import { Index as Total } from './total/Index'
import { Index as Thankyou } from './thank-you/Index'

const Submit = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col justify-between gap-4'>
            <section className='px-4 items-center'>
                <Card>
                    <PersonalInfo />
                    {/* <Plans /> */}
                    {/* <AddOns /> */}
                    {/* <Total /> */}
                    {/* <Thankyou /> */}
                </Card>
            </section>
        </form>
    )
}

export default Submit