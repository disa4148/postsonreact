import React, {useContext} from 'react';
import {publicRoutes, privateRoutes} from '../router/routers';
import {Route, Routes, Navigate} from 'react-router-dom';
import { AuthContext } from '../context/index';
import Loader from './UI/Loader/Loader';


export const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth         
        ?   <Routes>
                {privateRoutes.map(route =>
                <Route exact={route.exact}
                path={route.path}
                element={route.element}
                key={route.path} />
            )}
            <Route path="login" element={<Navigate replace to="/posts" />}/>
            </Routes>

        :   <Routes>
                {publicRoutes.map(route =>
                <Route exact={route.exact}
                path={route.path}
                element={route.element} 
                key={route.path} />
            )}
            <Route path="posts" element={<Navigate replace to="/login" />}/>
            <Route path="about" element={<Navigate replace to="/login" />}/>
            </Routes>
        
      )
}

export default AppRouter