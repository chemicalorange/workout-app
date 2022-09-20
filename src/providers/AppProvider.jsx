import Routes from "../Routes.jsx"
import { AuthContext } from "../contexts/AuthContext"
import { useState } from "react"

const AppProvider = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Routes />
    </AuthContext.Provider>
  )
}

export default AppProvider