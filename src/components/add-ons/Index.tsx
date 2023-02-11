import Header from '../UI/Header'
import AddOn from './AddOn'
import Wrapper from '../UI/Wrapper'
import { useAppSelector } from '../../hooks/redux'

export const Index = () => {
  const { addOns } = useAppSelector(state => state.addOnsReducer);
  const { yearly } = useAppSelector(state => state.planReducer);
  return (
    <Wrapper>
      <Header title='Pick add-ons' description='Add-ons help enhance your gaming experince' />
      {addOns.map(item => <AddOn addOn={item.addOn} details={item.details} id={item.addOn} price={item.price} key={item.addOn} selected={item.selected} yearly={yearly} />)}
    </Wrapper>
  )
}