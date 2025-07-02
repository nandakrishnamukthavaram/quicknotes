import { useEffect, useState } from 'react';
import { getNotes, createNote, deleteNote } from './services/api';
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  const handleAdd = async (e) => {
  e.preventDefault(); // 💥 This prevents the form from refreshing the page
  console.log("Add button clicked 🚀");
  if (!title || !content) return;
  const newNote = await createNote({ title, content });
  console.log("Note created:", newNote);
  setNotes([...notes, newNote]);
  setTitle('');
  setContent('');
};

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="container">

  <h1 className="title">QuickNotes</h1>

  <form onSubmit={handleAdd} className="note-form">
    <input
      className="input title-input"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <input
      className="input content-input"
      placeholder="Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
    />
    <button type="submit" className="add-button">
      Add Note
    </button>
  </form>

  <ul className="notes-list">
    {notes.map((note) => (
      <li key={note._id} className="note-item">
        <div>
          <strong>{note.title}</strong>
          <p>{note.content}</p>
        </div>
        <button onClick={() => handleDelete(note._id)} className="delete-button">
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}

export default App;
