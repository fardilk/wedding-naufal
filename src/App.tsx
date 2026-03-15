import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnvelopeSection from '@/sections/EnvelopeSection'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvelopeSection />} />
      </Routes>
    </BrowserRouter>
  )
}
