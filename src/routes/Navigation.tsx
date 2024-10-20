import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyLoadPage1, LazyLoadPage2,LazyLoadPage3 } from "../01-lazyload/pages";
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to='/lazy1' className={({ isActive })=> isActive ? 'nav-active': ''}>Lazy 1</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy2' className={({ isActive })=> isActive ? 'nav-active': ''}>Lazy 2</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy3' className={({ isActive })=> isActive ? 'nav-active': ''}>Lazy 3</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/lazy1" element={ <LazyLoadPage1 /> }/>
                <Route path="/lazy2" element={ <LazyLoadPage2 /> }/>
                <Route path="/lazy3" element={ <LazyLoadPage3 /> }/>
                <Route path="/*" element={ <Navigate to='/lazy1' replace />}/>
                
            </Routes>
        </div>
    </BrowserRouter>
  )
}
