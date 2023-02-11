import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { stepAction } from "../../store/stepState"


const Back = () => {
  const { steps } = useAppSelector(state => state.stepReducer)
  const dispatch = useAppDispatch();
  const goBackHandler = () => {
    dispatch(stepAction.goBack());
  }
  return (
    steps.currentStep === 1 ? null : <button onClick={goBackHandler} className='font-medium text-gray-500/90 absolute left-4 bottom-5 md:left-10' type={'button'}>Go Back</button>
  )
}

export default Back