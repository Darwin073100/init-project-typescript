import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

// interface FormValues{
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);

                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe tener maximo 15 caracteres')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe tener maximo 15 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .required('Requerido')
                        .email('Error del formato del email'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe Ceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
                })} >
                {
                    (formaik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type='text'/>
                            <ErrorMessage name="firstName" component='span'/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type='text'/>
                            <ErrorMessage name="lastName" component='span'/>

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type='email'/>
                            <ErrorMessage name="email" component='span'/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as='select'>
                                <option value=''>Select a Job</option>
                                <option value='Developer'>Developer</option>
                                <option value='Designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT JR</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span'/>

                            <label>
                                <Field name="terms" type='checkbox'/>
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name="terms" component='span'/>

                            <button type="submit">Sent Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
