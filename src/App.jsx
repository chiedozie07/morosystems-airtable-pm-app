import { useState } from 'react'
import './App.css'

function App() {
  console.log('DEBUG:', import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN, import.meta.env.VITE_AIRTABLE_BASE_ID);


  return (
    <>
      <div>
      <h1>Welcome to Chiedozie's Morosystems Airtable Assistant App!</h1>
      </div>
    </>
  )
}

export default App
