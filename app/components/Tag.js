import styles from "./Tag.module.css"

export default function Tag({ name, tagColor }) {
  return (
    <span className={styles.tag} style={{ backgroundColor: tagColor }}>
      {name}
    </span>
  )
}
