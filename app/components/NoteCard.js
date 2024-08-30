import styles from "./NoteCard.module.css"

export default function NoteCard({ title, content }) {
  return (
    <div className={styles.noteCard}>
      <h2 className={styles.noteTitle}>{title}</h2>
      <p className={styles.noteContent}>{content}</p>
      <button className={[styles.noteButton, styles.editButton].join(" ")}>
        Edit
      </button>
    </div>
  )
}
