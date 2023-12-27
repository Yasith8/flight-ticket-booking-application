import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
