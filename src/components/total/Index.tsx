import Header from '../UI/Header'
import Checkout from './Checkout'
import Total from './Total'
import Wrapper from '../UI/Wrapper'
import { useAppSelector } from '../../assets/hooks/redux'
export const Index = () => {
  const { steps } = useAppSelector(state => state.stepReducer)
  const totalAddons = steps.addOns.data.reduce((intialState, item) => {
    return intialState + item.price!;
  }, 0);

  const total = steps.plans.data.price! + totalAddons;
  return (
    <Wrapper>
      <Header title='Finishing up' description='Double-check everything looks OK before confirming.' />
      <Checkout plan={steps.plans.data} addOns={steps.addOns.data} />
      <Total yearly={steps.plans.data.yearly} total={total} />
    </Wrapper>
  )
}