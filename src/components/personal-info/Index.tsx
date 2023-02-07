import React from 'react'
import Form from './Form'
import Header from '../UI/Header'
import Wrapper from '../UI/Wrapper'
export const Index = () => {
    return (
        <Wrapper>
            <Header title='Personal info' description='Please provide your name, email address, and phone number.' />
            <Form />
        </Wrapper>
    )
}