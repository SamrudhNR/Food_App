import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import RestMenu from './components/RestMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


// Code Splitting
// Chunking
// Lazy loading
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => (
    <Provider store = {appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    </Provider>
        
)

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <Suspense fallback="Loading...."> <About /></Suspense>,
                },
                {
                    path: "/contact",
                    element: <Suspense fallback="Loading...."> <Contact /></Suspense>,
                },
                {
                    path: "/restaurant/:restId",
                    element: <RestMenu />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
            ],
            errorElement: <ErrorPage />,
        },
        
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);