import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'
import AddDragAndDrop from './views/AddDragAndDrop'
import AddFillInTheBlank from './views/AddFillInTheBlank'
import AddMultipleChoice from './views/AddMultipleChoice'
import QuestionsForSubject from './views/QuestionsForSubject'
import QuestionDetail from './views/QuestionDetail'

function App() {
  return (
    <Router >
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error/>} />
        <Route path='/QuestionsForSubject' element={<QuestionsForSubject/>}/>
        <Route path='/AddDragAndDrop' element={<AddDragAndDrop/>} />
        <Route path='/AddFillInTheBlank' element={<AddFillInTheBlank/>} />
        <Route path='/AddMultipleChoice' element={<AddMultipleChoice/>} />
        <Route path='/QuestionDetail' element={<QuestionDetail/>} />
       
        
      </Routes>
      </div>
      
      
    </Router>
  );
}

export default App;
