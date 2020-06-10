import React, { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null,
      },
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
  return (
    <main className={styles.main}>
      <form onSubmit={handleOnSubmit} className={styles.formStyles}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className={styles.input}
        />
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className={styles.textarea}
        />
        <button
          type="submit"
          disabled={status.submitting}
          className={styles.button}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </main>
  )
}
