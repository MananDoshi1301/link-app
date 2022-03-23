import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Navbar from './components/common/Navbar';
import Home from './components/Home';

function App() {

  const [details, setDetails] = useState({
    email: "user", id: ""
  })

  return (
    <div className="App">
      <Router>
        <Navbar details={details} />
        <Routes>
          <Route path={'/'} element={<Home />}>
          </Route>
          <Route path={'/signup'} element={<Signup />}>
          </Route>
          <Route path={'/signin'} element={<Signin />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
