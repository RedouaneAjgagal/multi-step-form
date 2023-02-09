import Form from './Form'
import Header from '../UI/Header'
import Wrapper from '../UI/Wrapper'
import { refHanlder } from './Form'

interface Props {
    errors: string[]
}

export const Index: React.FC<refHanlder & Props> = (props) => {

    return (
        <Wrapper>
            <Header title='Personal info' description='Please provide your name, email address, and phone number.' />
            <Form emailRef={props.emailRef} nameRef={props.nameRef} phoneRef={props.phoneRef} errors={props.errors} />
        </Wrapper>
    )
}