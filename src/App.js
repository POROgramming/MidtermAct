import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Menu from './components/pages/Menu';

function App() {
    return (
      <Router>
        <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu/*' element={<Menu />} />
            </Routes>
        </div>
      </Router>
    );
  }

  
  
  export default App;
