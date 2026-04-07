import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { DashboardPage } from './pages/dashboard/DashboardPage'
import { RoadmapPage } from './pages/roadmap/RoadmapPage'
import { TopicPage } from './pages/roadmap/TopicPage'
import { ConceptNotePage } from './pages/notes/ConceptNotePage'
import { StructurePage } from './pages/structure/StructurePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/roadmap/topic/:slug" element={<TopicPage />} />
            <Route path="/roadmap/topic/:topicSlug/:conceptIndex" element={<ConceptNotePage />} />
            <Route path="/structure" element={<StructurePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
