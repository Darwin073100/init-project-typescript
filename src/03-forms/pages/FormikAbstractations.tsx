import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { 
    MyTextInput, 
    MyCheckBox, 
    MySelect 
} from "../components/";

// interface FormValues{
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikAbstractations = () => {

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
                            <MyTextInput 
                                label="First Name" 
                                placeHolder="Edwin"
                                name="firstName" />
                            <MyTextInput 
                                label="Last Name" 
                                placeHolder="Garcia Quiterio"
                                name="lastName" />
                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeHolder="email@domain.com"
                                type="email" />

                            <MySelect label="Job Type" name="jobType">
                                <option value=''>Select a Job</option>
                                <option value='Developer'>Developer</option>
                                <option value='Designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT JR</option>
                            </MySelect>

                            <MyCheckBox label="Terminos y condiciones" name="terms" />

                            <button type="submit">Sent Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
