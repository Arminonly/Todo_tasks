import { Routes, Route } from 'react-router-dom';
import './App.css';
import { RegistryPage } from './pages/registry/RegistryPage';
import { TodosPage } from './components/TodosPage';
import { LoginPage } from './pages/login/LoginPage';
import { NotfoundPage } from './pages/NotfoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reg" element={<RegistryPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    
    </>
  );
}

export default App;
