import { Routes, Route } from 'react-router-dom';
import './App.css';
import { RegistryPage } from './pages/registry/RegistryPage';
import { TodosPage } from './components/TodosPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistryPage />} />
        <Route path="/1" element={<TodosPage />} />
      </Routes>
    </>
  );
}

export default App;
