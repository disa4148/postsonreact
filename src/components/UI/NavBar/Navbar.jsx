import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { MyButton } from '../Button/MyButton';
import { AuthContext } from '../../../context/index';


export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')//Удаление записи Auth и его значения 
  }

  return (
    <div className='nav-bar'>
      <div className='nav-bar__links'>
        <ul>
          <li><Link to="/about">О сайте</Link></li> 
          <li><Link to="/posts">Посты</Link></li>
        </ul>
        <ul>
          <li>
            <div><MyButton onClick={logout} >Выйти</MyButton></div>
          </li>
        </ul>
      </div>
    </div>
  )
}
