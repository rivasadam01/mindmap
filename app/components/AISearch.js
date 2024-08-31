"use client"

import { useState } from "react"
import styles from "./AISearch.module.css"

export default function AISearch() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault()

    setResponse(`AI response for: "${query}"`)

    setQuery("")
  }

  return (
    <div className={styles.aiSearch}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search or ask AI..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {response && (
        <div className={styles.aiResponse}>
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}
