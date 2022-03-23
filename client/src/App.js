import { useState } from 'react';
import './App.css';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';

function App() {

  const [details, setDetails] = useState({
    email: "", id: ""
  })

  return (
    <div className="App">
      {/* <Signup /> */}
      <Signin />
    </div>
  );
}

export default App;
