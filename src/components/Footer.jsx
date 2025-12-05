import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer className="absolute bottom-0 w-full text-center py-4 text-gray-500 text-sm">
      <p>Copyright ⓒ {year}</p>
    </footer>
    </div>
  )
}

export default Footer
