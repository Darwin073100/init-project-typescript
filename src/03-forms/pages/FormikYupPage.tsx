import { useFormik } from "formik";
import * as Yup from 'yup';

// interface FormValues{
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikYupPage = () => {

    const { handleSubmit, getFieldProps, 
        errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe tener maximo 15 caracteres')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe tener maximo 15 caracteres')
                .required('Requerido'),
            email: Yup.string()
                .required('Requerido')
                .email('Error del formato del email'),
        }),
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} >
                
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName &&  <span>{errors.firstName}</span>}
                
                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                { touched.lastName && errors.lastName &&  <span>{errors.lastName}</span>}
               
                <label htmlFor="email">Email Address</label>
                <input type="text" {...getFieldProps('email')} />
                {touched.email && errors.email &&  <span>{errors.email}</span>}
                
                <button type="submit">Sent Form</button>
            </form>
        </div>
    )
}
