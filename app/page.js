"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./page.module.css"
import NoteCard from "./components/NoteCard"
import NoteCardNew from "./components/NoteCardNew"

export default function Home() {
  const { data: session } = useSession()
  // Sample tags (you can remove these if you want to keep using props)
  const sampleTags1 = [
    {
      name: "Personal",
      color: "#00FF00",
    },
    {
      name: "Urgent",
      color: "#FF0000",
    },
  ]

  const sampleTags2 = [
    {
      name: "Work",
      color: "#45B7D1",
    },
    {
      name: "Important",
      color: "#FFA07A",
    },
  ]

  const sampleTags3 = [
    {
      name: "Study",
      color: "#98FB98",
    },
    {
      name: "Project",
      color: "#DDA0DD",
    },
  ]

  const sampleTags4 = [
    {
      name: "Health",
      color: "#20B2AA",
    },
    {
      name: "Finance",
      color: "#FFD700",
    },
    {
      name: "Urgent",
      color: "#FF0000",
    },
  ]

  const sampleTags5 = [
    {
      name: "Travel",
      color: "#87CEEB",
    },
    {
      name: "Hobby",
      color: "#FFA500",
    },
  ]

  return (
    <main className={`${styles.main} ${styles.dark}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Mindmap</h1>
        <h1>Notes with AI</h1>
        {session ? (
          <>
            <p>Welcome, {session.user.email}!</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>You are not signed in.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        <div className={styles.notesContainer}>
          <div className={styles.grid}>
            <NoteCardNew />
            <NoteCard
              title="Note 1"
              content="This is the content of Note 1."
              tags={sampleTags1}
            />
            <NoteCard
              title="Note 2"
              content="This is the content of Note 2."
              tags={sampleTags2}
            />
            <NoteCard
              title="Note 3"
              content="This is the content of Note 3."
              tags={sampleTags3}
            />
            <NoteCard
              title="Note 4"
              content="This is the content of Note 4."
              tags={sampleTags4}
            />
            <NoteCard
              title="Note 5"
              content="This is the content of Note 5."
              tags={sampleTags5}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
