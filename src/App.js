import React, {useState, useEffect}  from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Posts from './Pages/Posts';
import PostIdPage from './Pages/PostIdPage';
import Error from './Pages/Error';
import { Navbar } from './components/UI/NavBar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/index';


// Styles
import './styles/App.css';



export default function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])

  return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth, 
        isLoading
      }}>
          <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}