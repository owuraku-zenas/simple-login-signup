import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [pageToggle, setPageToggle] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {
          loggedIn ? <Home user={user} setIsLoggedIn={setLoggedIn} setUser={setUser} /> : 
          pageToggle ? <Login setPageToggle={setPageToggle} pageToggle={pageToggle} setIsLoggedIn={setLoggedIn} setUser={setUser} /> : <SignUp setPageToggle={setPageToggle} setLoggedIn={setLoggedIn} pageToggle={pageToggle} setUser={setUser} />
        }
        
      </header>
    </div>
  );
}

export default App;
