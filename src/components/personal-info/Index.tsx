import Form from './Form'
import Header from '../UI/Header'
import Wrapper from '../UI/Wrapper'
import { refHanlder } from './Form'


export const Index: React.FC<refHanlder> = (props) => {

    return (
        <Wrapper>
            <Header title='Personal info' description='Please provide your name, email address, and phone number.' />
            <Form emailRef={props.emailRef} nameRef={props.nameRef} phoneRef={props.phoneRef} />
        </Wrapper>
    )
}