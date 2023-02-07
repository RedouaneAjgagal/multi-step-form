import React from 'react'
import Header from '../UI/Header'
import Checkout from './Checkout'
import Total from './Total'
import Wrapper from '../UI/Wrapper'

export const Index = () => {
  return (
    <Wrapper>
        <Header title='Finishing up' description='Double-check everything looks OK before confirming.' />
        <Checkout />
        <Total total={12} billing='monthly' />
    </Wrapper>
  )
}