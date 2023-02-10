import Form from './Form'
import Header from '../UI/Header'
import Wrapper from '../UI/Wrapper'

interface Props {
    errors: {
        name: boolean,
        email: boolean,
        phone: boolean
    }
}

export const Index: React.FC<Props> = (props) => {

    return (
        <Wrapper>
            <Header title='Personal info' description='Please provide your name, email address, and phone number.' />
            <Form errors={props.errors} />
        </Wrapper>
    )
}