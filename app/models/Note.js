import React from "react"
import styles from "./NoteCard.module.css"
import { Note, Tag } from "../models/Note"

interface NoteCardProps {
  note: Note;
}

const TagComponent: React.FC<{ tag: Tag }> = ({ tag }) => {
  return (
    <span className={styles.tag} style={{ backgroundColor: tag.color }}>
      {tag.name}
    </span>
  )
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className={styles.noteCard}>
      <h2 className={styles.noteTitle}>{note.title}</h2>
      <div className={styles.tagContainer}>
        {note.tags.map((tag, index) => (
          <TagComponent key={index} tag={tag} />
        ))}
      </div>
      <p className={styles.noteContent}>{note.content}</p>
      {/* Add other note card elements here */}
    </div>
  )
}

export default NoteCard
