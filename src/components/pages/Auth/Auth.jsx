import styles from "./Auth.module.scss"

import Layout from "../../common/Layout"
import TitleImage from "../../ui/TitleImage/TitleImage"
import Field from "../../ui/Field/Field"
import Button from "../../ui/Button/Button"
import Alert from "../../ui/Alert/Alert"

import AuthImage from "../../../images/pagesbg/auth.jpg"
import { useState } from "react"
import { useMutation } from "react-query"
import { useAuth } from "../../../hooks/useAuth"
import { $api } from "../../../api/api"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("auth")
  const [alert, setAlert] = useState(false)

  const { setIsAuth } = useAuth()

  const navigate = useNavigate()

  const successLogin = (token) => {
    localStorage.setItem("token", token)
        setIsAuth(true)

        setEmail('')
        setPassword('')
        
        navigate('/')
        setAlert({
          text: "You have been succesfuly",
          type: "success",
        })
  }
   
  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation(
    "Registration",
    () =>
      $api({
        url: "/users",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token)
      },
      onError(error) {
        setAlert({
          text: error,
          type: "error",
        })
      },
    }
  )

  const {
    mutate: auth,
    isLoading: isLoadingAuth,
    error: errorAuth,
  } = useMutation(
    "Auth",
    () =>
      $api({
        url: "/users/login",
        type: "POST",
        body: { email, password },
        auth: false,
      }),
    {
      onSuccess(data) {
        successLogin(data.token)
      },
      onError(error) {
        setAlert({
          text: error,
          type: "error",
        })
      },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === "auth") {
      auth()
    } else {
      register()
    }
  }

  return (
    <div>
      <Layout>
        <TitleImage title={"Auth || Register"} image={AuthImage} />
        <form action='' onSubmit={handleSubmit} className={styles.form}>
          {alert && <Alert text={alert.text} type={alert.type} />}
          <Field
            type='text'
            placeholder='Email'
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Field
            type='password'
            placeholder='Password'
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <div className={styles.buttons}>
            <Button
              type='submit'
              text={"Sign in"}
              style={"form"}
              callback={() => setType("auth")}
            />
            <Button
              type='submit'
              text={"Sign up"}
              style={"form"}
              callback={() => setType("register")}
            />
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default Auth
