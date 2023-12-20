import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from './components/AuthForm/AuthForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthForm/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
