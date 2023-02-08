import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateNews } from "./components/CreateNews";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { LoginForm } from "./components/Login";
import { News } from "./components/News";
import { EditNews } from './components/EditNews';

function App(props) {
  return (
    <div className='App'>
      <Header auth={props.auth} />
      <Routes>
        <Route
          exact
          path='/'
          element={props.auth === "true" ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/news'
          element={props.auth === "true" ? <News /> : <Navigate to='/login' />}
        />
        <Route
          path='/createNews'
          element={
            props.auth === "true" ? <CreateNews /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/editNews'
          element={
            props.auth === "true" ? <EditNews /> : <Navigate to='/login' />
          }
        />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
