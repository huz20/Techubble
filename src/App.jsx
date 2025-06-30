// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home' // import your Home component here
import ContactUs from './ContactUs' 
import Company from './Company' // import your Company component here
import Solutions from './Solutions' // import your Solutions component here
import Resources from './Resources' // import your Resources component here


// APPLY LAZY LOADING

function App() {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />

        {/* Add more routes as needed */}

      </Routes>
      
    </>
  )
}

export default App