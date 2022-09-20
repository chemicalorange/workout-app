import React from "react";
import styles from "./Hamburger.module.scss";
import { NavLink } from "react-router-dom";

import { menuBase } from "./MenuBase";
import { useState } from "react";
import classNames from "classnames";
import { useOutsideAlerter } from "../../../../hooks/useOutsideAlerter";
import { useAuth } from "../../../../hooks/useAuth";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  const {ref, isComponentVisible, setIsComponentVisible} = useOutsideAlerter(false)
  const { setIsAuth } = useAuth()

  const logOut = () => {
   
    localStorage.removeItem('token')
    setIsAuth(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={classNames(styles["hamburger"], {[styles.show] : isComponentVisible })}
        onClick={()=>{setIsComponentVisible(!isComponentVisible)}}
      >
        <div></div>
      </button>
      {
        isComponentVisible && <nav>
        <ul className={styles.menu}>
          {menuBase.map((item) => {
            return (
              <li key={"_key_" + item.title}>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            );
          })}
          <li onClick={logOut}>Log out</li>
        </ul>
      </nav>
      }
    </div>
  );
};

export default Hamburger;
