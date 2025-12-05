// src/components/CreateArea.jsx
import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return{
         ...prevNote, [name]:value
      }
     
    })
  }

  function submitNote(event) {
//  Send Data to Parent
    props.onAdd(note);
    
    
    
    // Validation
    if (!note.title.trim() && !note.content.trim()) return;

    
   setNote({ title: "", content: "" });
    setExpanded(false);

    event.preventDefault();
  }

  return (
    <div className="flex justify-center mt-10 px-4 mb-10">
      <form className="relative w-full max-w-lg bg-neutral-800 p-4 rounded-xl shadow-xl border border-neutral-700 transition-all duration-300">
        
        {/* Title Input (Conditionally Rendered) */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="w-full text-xl font-bold mb-3 outline-none bg-transparent placeholder-gray-500 text-white border-b border-transparent focus:border-neutral-600 pb-2"
          />
        )}

        {/* Content Textarea */}
        <textarea
          name="content"
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          className="w-full resize-none outline-none bg-transparent text-gray-300 placeholder-gray-500 text-base"
        />

        {/* Floating Add Button */}
        <button
          onClick={submitNote}
          className={`absolute -bottom-5 right-5 bg-yellow-400 text-neutral-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-yellow-500 transition-all duration-300 hover:scale-110 hover:rotate-90 ${isExpanded ? "scale-100" : "scale-0"}`}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;