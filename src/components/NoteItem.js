import React from 'react';
import './NoteItem.css';

function NoteItem({ note, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-item">
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <button 
          className="delete-btn" 
          onClick={handleDelete}
          title="Delete note"
        >
          🗑️
        </button>
      </div>
      
      <p className="note-content">{note.content}</p>
      
      <div className="note-footer">
        <span className="note-date">
          {formatDate(note.createdAt)}
        </span>
      </div>
    </div>
  );
}

export default NoteItem;