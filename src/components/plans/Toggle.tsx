import React from 'react'

const Toggle = () => {
  return (
    <div className='flex justify-center gap-6 bg-blue-100/25 py-4 rounded-xl'>
        <h5 className='font-semibold text-gray-500/80'>Monthly</h5>
        <input type="checkbox" name="billing" id="billing" />
        <h5 className='font-semibold text-gray-500/80'>Yearly</h5>
    </div>
  )
}

export default Toggle