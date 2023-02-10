import { useAppDispatch, useAppSelector } from "../../assets/hooks/redux";
import { infoAction } from "../../store/personalInfo";

interface Props {
    errors: {
        name: boolean,
        email: boolean,
        phone: boolean
    }
}

const Form: React.FC<Props> = (props) => {

    const { data } = useAppSelector(state => state.personalInfoReducer);
    const dipatch = useAppDispatch();

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dipatch(infoAction.name({ name: e.target.value }));
    }
    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dipatch(infoAction.email({ email: e.target.value }));
    }
    const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dipatch(infoAction.phone({ phone: e.target.value }));
    }

    return (
        <article className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className={`border px-4 py-2  rounded font-medium ${props.errors.name ? 'bg-red-200' : 'border-slate-300'}`} onChange={nameChangeHandler} defaultValue={data.name.value || ''} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className={`border px-4 py-2 border-slate-300 rounded font-medium ${props.errors.email ? 'bg-red-200' : 'border-slate-300'}`} onChange={emailChangeHandler} defaultValue={data.email.value || ''} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder='e.g. +1 234 567 890' className={`border px-4 py-2 border-slate-300 rounded font-medium ${props.errors.phone ? 'bg-red-200' : 'border-slate-300'}`} onChange={phoneChangeHandler} defaultValue={data.phone.value || ''} />
            </div>
        </article>
    )
}

export default Form