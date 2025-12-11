import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []);

  // Auto-save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>📝 Notes App</h1>
        <p>Create, manage, and organize your notes</p>
      </header>
      
      <main className="app-main">
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      </main>

      <footer className="app-footer">
        <p>Your notes are automatically saved to your browser</p>
      </footer>
    </div>
  );
}

export default App;