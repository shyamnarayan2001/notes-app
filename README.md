# 📝 Notes App

A modern, responsive React-based Notes Application with localStorage persistence. Create, manage, and organize your notes with automatic saving.

## 🚀 Features

- **Create Notes**: Add new notes with title and content
- **Delete Notes**: Remove notes you no longer need
- **Auto-Save**: Notes are automatically saved to localStorage
- **Persistent Storage**: Your notes persist across browser sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Real-time Updates**: Instant feedback on all actions

## 🛠️ Technology Stack

- **React 18.2.0**: Modern React with Hooks
- **LocalStorage API**: Browser-based data persistence
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/shyamnarayan2001/notes-app.git
cd notes-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🏗️ Project Structure

```
notes-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── NoteForm.js     # Component for creating notes
│   │   ├── NoteForm.css    # Styles for note form
│   │   ├── NoteList.js     # Component for displaying notes
│   │   ├── NoteList.css    # Styles for note list
│   │   ├── NoteItem.js     # Individual note component
│   │   └── NoteItem.css    # Styles for note item
│   ├── App.js              # Main application component
│   ├── App.css             # Global app styles
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
├── BRD.md                  # Business Requirements Document
└── README.md               # This file
```

## 💡 Usage

1. **Create a Note**:
   - Enter a title in the "Title" field
   - Write your note content in the "Content" area
   - Click "Add Note" button

2. **Delete a Note**:
   - Click the 🗑️ icon on any note
   - Confirm the deletion

3. **Auto-Save**:
   - Notes are automatically saved to your browser's localStorage
   - No manual save action required

## 🎨 Features in Detail

### Auto-Save Functionality
The app automatically saves your notes to localStorage whenever you create or delete a note. This ensures your data persists even if you close the browser.

### Responsive Design
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

### Data Validation
- Title and content are required fields
- Maximum length limits prevent excessive data
- User-friendly error messages

## 🔐 Data Storage

Notes are stored in your browser's localStorage with the key `'notes'`. The data structure is:

```javascript
[
  {
    id: 1234567890,
    title: "Note Title",
    content: "Note content...",
    createdAt: "2025-12-11T18:00:00.000Z"
  },
  // ... more notes
]
```

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📝 SDLC Documentation

For detailed business requirements, user personas, and technical specifications, see [BRD.md](BRD.md).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Narayan**
- GitHub: [@shyamnarayan2001](https://github.com/shyamnarayan2001)

## 🙏 Acknowledgments

- React team for the amazing framework
- Modern web development community
- All contributors and users

## 📧 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React**