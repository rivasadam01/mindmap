"use client"

import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./page.module.css"
import NoteCard from "./components/NoteCard"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className={`${styles.main} ${styles.dark}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Mindmap</h1>
        <h1>Notes with AI</h1>
        {/* Add login/logout button */}
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

        <div className={styles.grid}>
          <NoteCard title="Note 1" content="This is the content of Note 1." />
          <NoteCard title="Note 2" content="This is the content of Note 2." />
          {/* Add more note cards as needed */}
        </div>

        {/* Add button to create a new note */}
        <button className={styles.addButton}>Add Note</button>
      </div>
    </main>
  )
}
