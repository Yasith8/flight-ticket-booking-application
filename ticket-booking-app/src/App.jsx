import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Checking from './components/Checking';
import Cancel from './components/Cancel';
import Edit from './components/Edit';
import Shadule from './components/Shadule';


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/booking' element={<Booking/>}></Route>
          <Route path='/checking' element={<Checking/>}></Route>
          <Route path='/cancel' element={<Cancel/>}></Route>
          <Route path='/edit' element={<Edit/>}></Route>
          <Route path='/shadule' element={<Shadule/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
