export interface refHanlder {
    nameRef: React.RefObject<HTMLInputElement>;
    emailRef: React.RefObject<HTMLInputElement>;
    phoneRef: React.RefObject<HTMLInputElement>;
}
interface Props {
    errors: string[]
}

const Form: React.FC<refHanlder & Props> = (props) => {

    const nameError = props.errors.filter(err => err === 'name');
    const emailError = props.errors.filter(err => err === 'email');
    const phoneError = props.errors.filter(err => err === 'phone');

    return (
        <article className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className={`border px-4 py-2  rounded font-medium ${nameError.length ? 'bg-red-200' : 'border-slate-300'}`} ref={props.nameRef} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className={`border px-4 py-2 border-slate-300 rounded font-medium ${emailError.length ? 'bg-red-200' : 'border-slate-300'}`} ref={props.emailRef} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder='e.g. +1 234 567 890' className={`border px-4 py-2 border-slate-300 rounded font-medium ${phoneError.length ? 'bg-red-200' : 'border-slate-300'}`} ref={props.phoneRef} />
            </div>
        </article>
    )
}

export default Form