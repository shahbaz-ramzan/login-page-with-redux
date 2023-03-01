
import './App.css';
import LoginForm from './LoginForm';
import LogOut from './LogOut';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/loginSlicer';

function App() {

  const user =useSelector((selectUser))
  return (
    <div className="App">

    {user ?  <LogOut /> : <LoginForm />  }
    
    
     
    </div>
  );
}

export default App;
