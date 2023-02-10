import React from 'react'
import Next from './Next'
import Back from './Back'

interface Props {
  hideGoBack: boolean;
  confirm: boolean;
}

const Index: React.FC<Props> = (props) => {
  return (
    <div className='py-8 bg-white relative'>
      {props.hideGoBack ? null : <Back />}
      <Next confirm={props.confirm} />
    </div>
  )
}

export default Index