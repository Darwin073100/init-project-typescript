import { ErrorMessage, useField } from 'formik';

interface Props{
    label: string;
    name: string;
    type?: 'text' | 'password' | 'email';
    placeHolder?: string,
    [x: string]: any,
}

export const MyTextInput = ({ label, ...props }: Props) => {
    const [ field, meta] = useField(props);
    console.log(field);
    
    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input type={props.type || 'text'} {...field} {...props}/>
            <ErrorMessage name={ props.name } component='span' />
            {/* {
                meta.touched && meta.error &&(
                    <span {...field}>{meta.error}</span>
                )
            } */}
        </>
    )
}
