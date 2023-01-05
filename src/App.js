import './App.css';
import Notes from './components/Notes';
import Checklist from './components/Checklist';
import Reminder from './components/Reminder';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Notes/>} />
        <Route path='/checklist' element={<Checklist/>} />
        <Route path='/reminder' element={<Reminder/>} />
      </Routes>
    </div>
  );
}

export default App;
