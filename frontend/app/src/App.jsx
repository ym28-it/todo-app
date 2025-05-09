// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './features/auth/pages/LoginPage'
import SignUpPage from './features/auth/pages/SignUpPage'
import SelectPage from './features/auth/pages/SelectPage'
import TodoPage from './features/todo/pages/TodoPage'
import SettingsPage from './features/settings/pages/SettingsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/select" />} />
      <Route path="/auth/select" element={<SelectPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignUpPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
