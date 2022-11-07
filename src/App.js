import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'
import QuestionsForSubject from './components/QuestionsForSubject'

function App() {
  return (
    <Router >
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error/>} />
        <Route path='/QuestionsForSubject' element={<QuestionsForSubject/>}/>
        
      </Routes>
      </div>
      
      
    </Router>
  );
}

export default App;
