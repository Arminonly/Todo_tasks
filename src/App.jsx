import { Routes, Route } from 'react-router-dom';
import './App.css';
import { RegistryPage } from './pages/registry/RegistryPage';
import { TodosPage } from './components/TodosPage';
import { LoginPage } from './pages/login/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistryPage />} />
     
        <Route path="/1" element={<TodosPage />} />
        <Route path="/2" element={ <LoginPage />} />
      </Routes>
      <hr />
    </>
  );
}

export default App;
