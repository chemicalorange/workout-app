import styles from "./Field.module.scss"

const Field = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}

export default Field
