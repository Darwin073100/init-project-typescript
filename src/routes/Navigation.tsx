import logo from '../assets/react.svg';
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes
} from "react-router-dom";
import {
    RegisterPage,
    FormikAbstractations,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterFormikPage,
    DynamicForm
} from "../03-forms/pages/";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstractations' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasicPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstractations" element={<FormikAbstractations />} />
                    <Route path="/formik-register" element={<RegisterFormikPage />} />
                    <Route path="/dynamic-form" element={<DynamicForm />} />
                    <Route path="/about" element={<h1>About page</h1>} />
                    <Route path="/users" element={<h1>Users page</h1>} />
                    <Route path="/*" element={<Navigate to='/' replace />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
