const NoteList = ({notes, setNotes, editId, setEditId}) => {

    if(notes.length === 0){
        return <p>No notes available</p>
    }

    const handleEdit = (id) => {
        setEditId(id)
    }

    const handleDelete = (id) => {
        setNotes(notes.filter(n => n.id !== id))
        if(editId === id){
            setEditId(null)
        }
    }

  return (
    <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-md flex flex-col gap-4">
        {notes.map(n => (
            <div key = {n.id} className="flex border">
                <div>
                <h2>{n.title}</h2>
                <p>{n.content}</p>
                </div>
            <div className="flex flex-col justify-between p-5">
                <button onClick={()=> handleEdit(n.id)}>Edit</button>
                <button onClick={() => handleDelete(n.id)}>Delete</button>
            </div>
                
            </div>
        ))}
    </div>
  )
}

export default NoteList