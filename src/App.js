
import { useEffect, useState } from 'react';
import './App.css';
import { MyNotes } from './MyNotes';
import { getAllNotes, addNote, editNote, deleteNote} from './FetchNotes';


function App() {
  const [myNote, setNote] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
 const [noteId, setNoteId] = useState('');

  useEffect(()=>{
    getAllNotes(setNote);
  },[])

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setNoteId(_id);
  }
  return (
    <div className="App">
      <h1>MY PLANNER</h1>
      <input
      type="text"
      placeholder="Add a note"
      value={title}
      onChange={(e)=>setTitle((e.target.value))}
      />
      <button 
      disabled = {!title}
      onClick=
      {editing ? ()=> editNote(noteId, title, setTitle, setNote, setEditing):
      () => addNote(title, setTitle, setNote)}>
        {editing ? 'Edit' : 'Add'}
        </button>
{myNote.map((note) => <MyNotes text={note.title} key={note._id}
updatingInInput={()=>updatingInInput(note._id, note.title)}
deleteNote={()=> deleteNote(note._id, setNote)}
/>
)}

    </div>
  );
}

export default App;
