import { useAppDispatch } from "../../assets/hooks/redux";
import { planAction } from "../../store/plans";

interface Props {
    yearly: boolean
}
const Toggle: React.FC<Props> = ({ yearly }) => {
    const dispatch = useAppDispatch();
    const billingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(planAction.billing())
    }
    return (
        <div className='flex justify-center gap-6 bg-blue-100/30 py-4 rounded-xl'>
            <h5 className={`font-bold  ${!yearly ? 'text-blue-900' : 'text-gray-500/80'}`}>Monthly</h5>
            <label htmlFor="billing" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" onChange={billingHandler} name="billing" id="billing" className="sr-only" />

                    <div className={`block w-11 h-6 rounded-full bg-blue-900`}></div>

                    <div className={`dot absolute left-1 top-1 w-4 h-4 rounded-full bg-white  duration-300 ${yearly && 'translate-x-5'}`}></div>
                </div>
            </label>
            <h5 className={`font-bold text-gray-500/80 ${yearly ? 'text-blue-900' : 'text-gray-500/80'}`}>Yearly</h5>
        </div>
    )
}

export default Toggle