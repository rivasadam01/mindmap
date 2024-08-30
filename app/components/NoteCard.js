import Image from "next/image"
import styles from "./NoteCard.module.css"
import editIcon from "../assets/edit-stroke.svg"
import Tag from "./Tag"

export default function NoteCard({ title, content, tags }) {
  return (
    <div className={styles.noteCard}>
      <h2 className={styles.noteTitle}>{title}</h2>
      <p className={styles.noteContent}>{content}</p>
      <div className={styles.noteFooter}>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag.name} tagColor={tag.color} />
          ))}
        </div>
        <div className={styles.noteButtons}>
          <button className={`${styles.editButton} ${styles.noteButton}`}>
            <Image
              src={editIcon}
              alt="Edit"
              width={100}
              height={100}
              className={styles.whiteIcon}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
