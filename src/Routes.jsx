import { Routes, BrowserRouter, Route } from "react-router-dom"
import NotFound from "./components/pages/NotFound/NotFound"

import { routesData } from "./routesData"

import { useAuth } from "./hooks/useAuth"

const App = () => {
  const { isAuth } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map((route, index) => {
          if (!isAuth && route.isAuth) {
            return (
              <Route key={`_key_${index}`} path='*' element={<NotFound />} />
            )
          }
          return (
            <Route
              key={`_key_${index}`}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
