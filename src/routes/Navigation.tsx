import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from '../assets/react.svg';
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo} alt="logo" />
                    <ul>
                        {
                            routes.map( route => (
                                <li key={ route.path }>
                                    <NavLink 
                                        to={ route.to} 
                                        className={({ isActive })=> isActive ? 'nav-active': ''}>
                                            { route.name }
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map( ({Component, path}) => (
                            <Route 
                                key={ path }
                                path={ path } 
                                element={ <Component /> }/>
                        ))
                    }

                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
