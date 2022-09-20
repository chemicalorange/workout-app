import styles from "./Header.module.scss"
import { Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

import userImage from "../../../images/header/user.svg"
import backImage from "../../../images/header/back.svg"
import gantelsImage from "../../../images/header/gantels.png"
import Hamburger from "./Hamburger/Hamburger"
import { useAuth } from "../../../hooks/useAuth"

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { isAuth } = useAuth()

  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <button type='button' onClick={() => navigate(-1)}>
          <img src={backImage} alt='Back' />
        </button>
      ) : isAuth ? (
        <button type='button' onClick={() => navigate("/profile")}>
          <img src={gantelsImage} alt='Back' width="40px"/>
        </button>
      ) : (
        <button
          type='button'
          onClick={() => navigate("/auth")}
        >
          <img src={userImage} alt='Auth' />
        </button>
      )}
      <Hamburger />
    </header>
  )
}

export default Header
