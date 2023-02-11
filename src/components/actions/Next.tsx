import React from 'react'

interface Props {
  confirm: boolean
}
const Next: React.FC<Props> = (props) => {
  return (
    <button className={`rounded text-white font-medium ease-in-out duration-200 hover:bg-indigo-900 absolute px-4 py-2 right-4 bottom-3 ${props.confirm ? 'bg-purple-900' : 'bg-blue-900'} md:right-10`}>{props.confirm ? 'Confirm' : 'Next Step'}</button>
  )
}

export default Next