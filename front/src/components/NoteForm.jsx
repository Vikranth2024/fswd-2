import {useState, useEffect} from 'react'

const NoteForm = ({notes, setNotes, editId, setEditId}) => {

    const [form, setForm] = useState({title : '' , content : ''})

    useEffect(() => {
        if(editId){
            const note = notes.find(n => n.id === editId)
            if(note){
                setForm({title : note.title, content: note.content})
            }
        }else{
            setForm({title : "", content : ""})
        }
    },[editId,notes])

    const handleAddorEdit = (e) => {
        e.preventDefault()
        if(editId && form.title.trim() && form.content.trim()){
            setNotes(notes.map(n => n.id === editId ? {...n, ...form} : n))
        }else{
            if(!form.title.trim() || !form.content.trim()){
                alert("Title and Content cannot be empty")
                return
            }
            setNotes([...notes, {...form, id: Date.now()}])
        }
        setEditId(null)
        setForm({title: "", content: ""})
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prev => ({...prev,[name] : value}))
    }

  return (
    <div className='bg-gray-100  p-4 rounded-lg shadow-md'>
        <form onSubmit={handleAddorEdit} className='flex flex-col gap-4'>
            <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" 
            className='border p-2'
            />
            <input type="text" name="content" value={form.content} onChange={handleChange} placeholder="Content"
            className='border p-2'
            />
            <div className='flex gap-4'>
            <button type="submit">{editId ? "Update" : "Add"}</button>
            {editId && (
                <button type="button" onClick={() => setEditId(null)}>Cancel</button>
            )}
            </div>
        </form>
    </div>
  )
}

export default NoteForm