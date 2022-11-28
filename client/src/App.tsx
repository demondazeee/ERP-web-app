import { useContext } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Login/Login"
import { loginContext } from "./store/LoginContext"

const App = () => {
  const {isLoggedIn} = useContext(loginContext)


  return (
    <>
      {/* {!isLoggedIn && <Login />} */}
      {/* {isLoggedIn && <Dashboard />} */}
      <Dashboard />
    </>
  )
}

export default App