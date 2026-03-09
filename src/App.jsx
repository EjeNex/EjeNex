import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-secondary-100 to-white">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative pt-18 lg:pt-16">
        <Home />
      </div>
    </div>
  )
}

export default App