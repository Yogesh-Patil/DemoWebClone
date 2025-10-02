import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('../features/Home/HomePage'))
const FoundersVisionPage = lazy(() => import('../features/FoundersVision/FoundersVisionPage'))
const ContactPage = lazy(() => import('../features/Contact/ContactPage'))

export default function AppRoutes(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<FoundersVisionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  )
}
