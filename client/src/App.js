import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import LinkPage from './components/LinkPage/LinkPage';
import AddLink from './components/LinkPage/AddLink';
import ErrorPage from './components/ErrorPage';

function App() {

  const [details, setDetails] = useState({
    email: "user", id: ""
  })

  return (
    <div className="App">
      <Router>
        <Navbar details={details} setDetails={setDetails} />
        <Routes>
          <Route path={'/signup'} element={<Signup />}></Route>
          <Route path={'/signin'} element={<Signin setDetails={setDetails} />}></Route>
          <Route path={'/link-page/add-link'} element={<AddLink userid={details.id} />}></Route>
          <Route path={'/link-page'} element={<LinkPage userid={details.id} />}></Route>
          <Route path={'/'} element={<Home />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
