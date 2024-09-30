import axios from 'axios';

const getAllNotes = (setNote) => {
    axios.get("https://notebook-backend-l39g.onrender.com")
    .then(({data}) => {console.log(data)
    setNote(data)
    })
}
const addNote = (title, setTitle, setNote) => {
    axios.post(`https://notebook-backend-l39g.onrender.com/saveNotes`, {title})
    .then((data) => {
        console.log(data)
        setTitle('')
        getAllNotes(setNote)
    })
}
const editNote=(noteId, title, setTitle, setNote, setEditing)=>{
    axios.put(`https://notebook-backend-l39g.onrender.com/editNote`, {_id: noteId, title})
    .then((data)=>{
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllNotes(setNote)
    })
}
const deleteNote = (_id, setNote) =>{
    axios.post(`https://notebook-backend-l39g.onrender.com/deleteNote`, {_id})
    .then((data)=>{
        console.log(data)
        getAllNotes(setNote)
    })
}
export { getAllNotes, addNote, editNote, deleteNote };