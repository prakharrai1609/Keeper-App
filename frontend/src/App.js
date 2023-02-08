import './App.css';
import Navbar from './components/Navbar';
import AllNotes from './pages/AllNotes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleNote from './pages/SingleNote';
import CreateNewNote from './pages/CreateNewNote';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<AllNotes />} />
          <Route path='/note/:id/' element={<SingleNote />} />
          <Route path='/create/' element={<CreateNewNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
