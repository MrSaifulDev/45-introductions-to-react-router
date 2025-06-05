import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
	      path: '/users',
	      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
	      element: <Users></Users>
      },
      {
        path:'users/:userID',
        /* loader: () => fetch('https://jsonplaceholder.typicode.com/users/7'), */
       loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),

        element: <UserDetails></UserDetails>
      },{
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },{
        path:'Posts/:postID',
       loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),

        element: <PostDetail></PostDetail>
      }
      

    ],

  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)




