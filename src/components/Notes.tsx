import React, { useState, useEffect } from 'react';
import { Save, Trash2 } from 'lucide-react';

interface Note {
  id: string;
  content: string;
  timestamp: string;
}

export default function Notes() {
  const [currentNote, setCurrentNote] = useState<string>('');
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setSavedNotes(JSON.parse(notes));
    }
  }, []);

  const handleSave = () => {
    if (!currentNote.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      content: currentNote,
      timestamp: new Date().toLocaleString()
    };

    const updatedNotes = [newNote, ...savedNotes];
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setCurrentNote('');
  };

  const handleDelete = (id: string) => {
    const updatedNotes = savedNotes.filter(note => note.id !== id);
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="w-full max-w-xl mx-auto xl:mx-0 space-y-6">
      {/* Current Note Input */}
      <div className="glass-card rounded-xl p-6 hover-effect">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-violet-400">Personal Notes</h2>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all duration-300 hover:scale-105"
          >
            <Save className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>
        
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-40 p-4 bg-gray-800/50 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none placeholder-gray-500"
        />
      </div>

      {/* Saved Notes */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-lg font-semibold text-violet-400 mb-4">Saved Notes</h3>
        <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
          {savedNotes.map((note) => (
            <div key={note.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400">{note.timestamp}</span>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{note.content}</p>
            </div>
          ))}
          {savedNotes.length === 0 && (
            <p className="text-gray-500 text-center py-4">No saved notes yet</p>
          )}
        </div>
      </div>
    </div>
  );
}