import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyLoadPage1, LazyLoadPage2, LazyLoadPage3 } from "../01-lazyload/pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li><NavLink to='lazy1'>Lazy 1</NavLink></li>
        <li><NavLink to='lazy2'>Lazy 2</NavLink></li>
        <li><NavLink to='lazy3'>Lazy 3</NavLink></li>
      </ul>
      <Routes>
        <Route path='lazy1' element={ <LazyLoadPage1 />} />
        <Route path='lazy2' element={ <LazyLoadPage2 />} />
        <Route path='lazy3' element={ <LazyLoadPage3 />} />
        <Route path='*' element={ <Navigate to= 'lazy1' replace/>} />
      </Routes>
    </div>
  )
}

export default LazyLayout;
