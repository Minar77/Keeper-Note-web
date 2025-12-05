import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("keeper-notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("keeper-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, { ...newNote, id: Date.now() }]);
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans flex flex-col text-gray-200">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
        {notes.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
