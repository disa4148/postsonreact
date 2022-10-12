import About from "../Pages/About";
import PostIdPage from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: true},    
    {path: '/posts', element: <Posts/>, exact: true},   
    {path: '/posts/:id:id', element: <PostIdPage/>, exact: true}
];

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true}  
];