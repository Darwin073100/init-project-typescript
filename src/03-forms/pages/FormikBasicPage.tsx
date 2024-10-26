import { FormikErrors, useFormik } from "formik";

interface FormValues{
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {
    const validate = ( { email, firstName, lastName}: FormValues )=>{

        const errors: FormikErrors<FormValues> = {};

        if(!firstName){
            errors.firstName  = '* Is required'
        } else if( firstName.length >= 15){
            errors.firstName = 'Must be 15 characters or less'
        }

        if(!lastName){
            errors.lastName  = '* Is required'
        } else if( lastName.length >= 10){
            errors.lastName = 'Must be 10 characters or less'
        }

        if(!email){
            errors.email  = '* Is required'
        } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( email )){
            errors.email = 'Invalid email address'
        }

        return errors;
    }

    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} >
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={ handleBlur }
                    value={values.firstName} />
                {touched.firstName && errors.firstName &&  <span>{errors.firstName}</span>}
                <label htmlFor="lastName">First Name</label>
                <input
                    type="text"
                    name="lastName"
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    value={values.lastName}
                />
                { touched.lastName && errors.lastName &&  <span>{errors.lastName}</span>}
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email &&  <span>{errors.email}</span>}
                <button type="submit">Sent Form</button>
            </form>
        </div>
    )
}
