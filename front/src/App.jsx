import { useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])
  const [editId, setEditId] = useState(null)

  return (
    <>

    <h1>Notes App</h1>

    <NoteForm 
    notes = {notes} 
    setNotes = {setNotes}
    editId = {editId}
    setEditId = {setEditId}
    />

    <NoteList 
    notes = {notes} 
    setNotes = {setNotes}
    editId = {editId}
    setEditId = {setEditId}
    />
      
    </>
  )
}

export default App
