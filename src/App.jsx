import { Navigate, Route, Routes } from 'react-router-dom';
import LifecyclePage from './pages/LifecyclePage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ciclo-de-vida" element={<LifecyclePage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
