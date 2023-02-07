import React from 'react'
import Header from '../UI/Header'
import Plan from './Plan'
import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'
import Toggle from './Toggle'
import Wrapper from '../UI/Wrapper'

export const Index = () => {
    return (
        <Wrapper>
            <Header title='Select your plan' description='You have option of monthly or yearly billing' />
            <div className='flex flex-col gap-4'>
                <Plan plan='Arcade' price={9} icon={arcadeIcon} />
                <Plan plan='Advanced' price={12} icon={advancedIcon} />
                <Plan plan='Pro' price={15} icon={proIcon} />
            </div>
            <Toggle />
        </Wrapper>
    )
}