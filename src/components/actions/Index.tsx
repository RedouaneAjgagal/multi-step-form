import React from 'react'
import Next from './Next'
import Back from './Back'

const Index = () => {
  return (
    <div className='flex justify-between py-6 px-4 bg-white'>
      <Back />
      <Next />
    </div>
  )
}

export default Index