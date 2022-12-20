import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import styles from '../styles/Editor.module.css'

const Editor = () => {
  const [input, setInput] = useState(`# ✍️ Start Editing`)
  return (
    <div className={styles.main}>
      <textarea
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <ReactMarkdown
        className={styles.markdown}
        rehypePlugins={[remarkGfm]}
      >
        {input}
      </ReactMarkdown>
    </div>
  )
}

export default Editor