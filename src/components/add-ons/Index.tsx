import React from 'react'
import Header from '../UI/Header'
import AddOn from './AddOn'
import Wrapper from '../UI/Wrapper'

export const Index = () => {
  return (
    <Wrapper>
        <Header title='Pick add-ons' description='Add-ons help enhance your gaming experince' />
        <AddOn addOn='Online service' details='Access to multiplayer games' price={1} id='online-service' />
        <AddOn addOn='Larger storage' details='Extra 1TB of cloud save' price={2} id='larger-storage' />
        <AddOn addOn='Customizable profile' details='Custom theme on your profile' price={2} id='customizable-profile' />
    </Wrapper>
  )
}