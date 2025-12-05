// src/components/Note.jsx
import React from "react";

function Note(props) {
  
  // Delete Button Click Handler
  function handleClick() {
    props.onDelete(props.id); // Parent er pathano function call kora holo ID shoho
  }

  return (
    <div className="bg-neutral-800 rounded-xl p-5 shadow-sm border border-neutral-700 relative group hover:border-yellow-400/50 transition duration-300 hover:shadow-lg hover:-translate-y-1">
      
      <h1 className="text-lg font-bold mb-3 break-words text-white">
        {props.title}
      </h1>
      
      <p className="text-gray-300 whitespace-pre-wrap break-words mb-8 text-sm leading-relaxed">
        {props.content}
      </p>
      
      {/* Delete Icon */}
      <button 
        onClick={handleClick}
        className="absolute bottom-3 right-3 text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>

    </div>
  );
}

export default Note;