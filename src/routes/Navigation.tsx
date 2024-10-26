import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from '../assets/react.svg';
import { RegisterPage } from "../03-forms/pages/RegisterPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to='/register' className={({ isActive })=> isActive ? 'nav-active': ''}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className={({ isActive })=> isActive ? 'nav-active': ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive })=> isActive ? 'nav-active': ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={({ isActive })=> isActive ? 'nav-active': ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={ <h1>Home page</h1>}/>
                <Route path="/register" element={ <RegisterPage />}/>
                <Route path="/about" element={ <h1>About page</h1>}/>
                <Route path="/users" element={ <h1>Users page</h1>}/>
                <Route path="/*" element={ <Navigate to='/' replace />}/>
                
            </Routes>
        </div>
    </BrowserRouter>
  )
}
