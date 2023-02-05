import logo from './logo.svg';
import './App.css';
import {News} from './components/News';
import { LoginForm } from './components/Login';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     <LoginForm/>
     <News/>
    </div>
  );
}

export default App;
