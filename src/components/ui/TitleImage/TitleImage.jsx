import React from "react"
import styles from "./TitleImage.module.scss"

const TitleImage = ({ image, title = "", children }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${image})`,
        backgroundSize: "contain",
        backgroundPositionX: "center",
      }}
    >
      {children}
      {title !== "" && <h1 className={styles.title}>{title}</h1>}
    </div>
  )
}

export default TitleImage
