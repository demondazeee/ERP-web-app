import { createContext, ReactNode, useState } from "react"

const defaultCtx = {
    isLoggedIn: false,
    loginHandler(){}
}

type LoginCTXProp = {
    children: ReactNode
}

export const loginContext = createContext(defaultCtx)

const LoginContext = ({children}: LoginCTXProp) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = () => {
        setIsLoggedIn(prev => !prev)
    }

    const defaultValues = {
        isLoggedIn,
        loginHandler
    }

    return (
        <>
            <loginContext.Provider value={defaultValues}>
                {children}
            </loginContext.Provider>
        </>
    )
}

export default LoginContext