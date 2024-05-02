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
        <Route path="/" element={<RegistryPage />} />
     
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/2" element={ <LoginPage />} />
        <Route path="*" element={ <NotfoundPage/>} />
      </Routes>
      <hr />
    </>
  );
}

export default App;
