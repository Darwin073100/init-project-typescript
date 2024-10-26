import { useField } from 'formik';

interface Props{
    label: string;
    name: string;
    [x: string]: any,
}

export const MyCheckBox = ({ label, ...props }: Props) => {
    const [ field, meta] = useField({...props, type: 'checkbox'});
    console.log(field);
    
    return (
        <>
            <label>
                <input type='checkbox' {...field} {...props}/>    
                { label }
            </label>
            {
                meta.touched && meta.error &&(
                    <span {...field}>{meta.error}</span>
                )
            }
        </>
    )
}
