"use client"

import type React from "react"
import { useState } from "react"

interface FeedbackFormProps {
  onSubmit: (feedback: string) => void
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(feedback)
    setFeedback("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={4} cols={50} />
      <button type="submit">Submit Feedback</button>
    </form>
  )
}

export default FeedbackForm
