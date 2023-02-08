export interface refHanlder {
    nameRef: React.RefObject<HTMLInputElement>;
    emailRef: React.RefObject<HTMLInputElement>;
    phoneRef: React.RefObject<HTMLInputElement>;
}

const Form: React.FC<refHanlder> = (props) => {

    return (
        <article className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className='border px-4 py-2 border-slate-300 rounded font-medium' ref={props.nameRef} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className='border px-4 py-2 border-slate-300 rounded font-medium' ref={props.emailRef} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder='e.g. +1 234 567 890' className='border px-4 py-2 border-slate-300 rounded font-medium' ref={props.phoneRef} />
            </div>
        </article>
    )
}

export default Form