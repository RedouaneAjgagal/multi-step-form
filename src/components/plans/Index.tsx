import Header from '../UI/Header'
import Plan from './Plan'
import Toggle from './Toggle'
import Wrapper from '../UI/Wrapper'
import { useAppSelector } from '../../assets/hooks/redux'

export const Index = () => {
    const { yearly, plans } = useAppSelector(state => state.planReducer)
    return (
        <Wrapper>
            <Header title='Select your plan' description='You have option of monthly or yearly billing' />
            <div className='flex flex-col gap-4'>
                {plans.map(item => <Plan key={item.plan} plan={item.plan} price={item.price} icon={item.icon} yearly={yearly} selected={item.selected} />)}
            </div>
            <Toggle yearly={yearly} />
        </Wrapper>
    )
}