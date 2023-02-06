import React from 'react'
import Form from './Form'
import Header from '../UI/Header'

export const Index = () => {
    return (
        <div className='px-4 flex flex-col gap-6'>
            <Header title='Personal info' description='Please provide your name, email address, and phone number.' />
            <Form />
        </div>
    )
}