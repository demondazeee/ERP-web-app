import { FormEvent, useContext } from "react"
import styled from "styled-components"
import { loginContext } from "../../store/LoginContext"
import { Card } from "../Layout/Card"
import { Container } from "../Layout/Container"
import { Form } from "../Layout/Forms"
import { Button } from "../UI/Buttons"
import { H2 } from "../UI/Headings"
import { Input } from "../UI/Inputs"


const LoginContainer = styled(Container)`
    height: 100vh;

`

const FormContainer = styled(Card)`
    max-width: 400px;
    margin: 5rem auto;
`
const FormContentsContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const FormActions = styled.div`
    margin-top: 3rem;
`

const LoginButton = styled(Button)`
    width: 100%;

    &:hover {
        background-color: #2563EB;
        cursor: pointer;
    }
`

const Login = () =>{

    const loginCtx = useContext(loginContext)

    const loginHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        loginCtx.loginHandler()
    }

    return (
        <>
            <LoginContainer>
                    <FormContainer>
                        <FormContentsContainer onSubmit={loginHandler}>
                                <H2>Login</H2>
                                <FormInputs>
                                    <Input type='text' placeholder="Username" />
                                    <Input type='password' placeholder="Password" />
                                </FormInputs>
                                <FormActions>
                                    <LoginButton type="submit">Login</LoginButton>
                                </FormActions>
                        </FormContentsContainer>
                    </FormContainer>
            </LoginContainer>
        </>
    )
}

export default Login