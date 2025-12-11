import React from 'react';
import NoteItem from './NoteItem';
import './NoteList.css';

function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return (
      <div className="notes-empty">
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h3>No notes yet</h3>
          <p>Create your first note to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>📚 Your Notes</h2>
        <span className="notes-count">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDeleteNote} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;