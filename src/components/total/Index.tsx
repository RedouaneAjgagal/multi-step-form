import React from 'react'
import Header from '../UI/Header'
import Checkout from './Checkout'
import Total from './Total'

export const Index = () => {
  return (
    <div className='px-4 flex flex-col gap-6'>
        <Header title='Finishing up' description='Double-check everything looks OK before confirming.' />
        <Checkout />
        <Total total={12} billing='monthly' />
    </div>
  )
}