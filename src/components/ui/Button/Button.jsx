import React from 'react'

import styles from './Button.module.scss'

const Button = ({text, callback, style = 'purple'}) => {
  return (
    <button onClick={callback} className={styles[style]}>
        {text}
    </button>
  )
}

export default Button