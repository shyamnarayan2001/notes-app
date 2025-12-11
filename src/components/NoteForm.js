import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim() || !content.trim()) {
      setError('Both title and content are required');
      return;
    }

    // Add note
    onAddNote(title.trim(), content.trim());
    
    // Reset form
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <div className="note-form-container">
      <h2>✍️ Create New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            maxLength={1000}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;