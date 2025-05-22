'use client';

import { useEffect, useState } from 'react'
import reactLogo from '../public/react.svg'
import {fetchNotes} from '../src/api';
import '../app/globals.css'

function App() {
  const [notes, setNotes,] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchNotes()
    .then(setNotes)
    .catch(err => setError(err.message))
  }, [])

  return (
    <>
    
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MindMap</h1>
      {error && <div className="error" >Error: {error}</div>}
      <div className="notes">
        {notes.length === 0 && <p> Loading notes...</p>}
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <strong>{note.title}</strong>: {note.content}
            </li>
          ))}
        </ul>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



    </>
  )
}

export default App
