import Plan from './Plan'
import AddOn from './AddOn'

interface Props {
    plan: {
        plan: string | null;
        price: number | null;
        yearly: boolean;
    },
    addOns: {
        addOn: string | null;
        price: number | null;
    }[]
}

const Checkout: React.FC<Props> = (props) => {
    return (
        <div className='bg-blue-100/30 rounded p-4 flex flex-col gap-4'>
            <Plan plan={props.plan.plan!} price={props.plan.price!} billing={props.plan.yearly ? 'yearly' : 'monthly'} />
            <div className='flex flex-col gap-3'>
                {props.addOns.map(item => <AddOn title={item.addOn!} price={item.price!} yearly={props.plan.yearly} key={item.addOn} />)}
            </div>
        </div>
    )
}

export default Checkout