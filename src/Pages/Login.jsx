import React, {useContext} from 'react'
import { MyButton } from '../components/UI/Button/MyButton'
import { MyInput } from '../components/UI/Input/MyInput'
import { AuthContext } from '../context/index'

export const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }   


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h1>Страница авторизации</h1>
        <form onSubmit={login} style={{display: "flex", flexDirection: "column", margin: "0 auto"}}>
            <MyInput placeholder="Введите логин"/>
            <MyInput type="password" placeholder='Введите пароль' />
            <MyButton>Авторизоваться</MyButton>
        </form>
    </div>
  )
}

export default Login