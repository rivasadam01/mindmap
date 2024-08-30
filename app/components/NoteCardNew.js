import Image from "next/image"
import styles from "./NoteCardNew.module.css"

export default function NoteCardNew() {
  return (
    <div className={styles.noteCard}>
      <div className={styles.newNoteContent}>
        <div className={styles.plusSign}>+</div>
        <div className={styles.newNoteText}>New Note</div>
      </div>
    </div>
  )
}
