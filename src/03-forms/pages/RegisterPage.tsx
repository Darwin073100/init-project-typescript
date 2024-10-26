import { useForm } from "../hooks/useForm";

interface FormProps {
    name: string,
    email: string,
    password1: string,
    password2: string,
};

const initialForm: FormProps = {
    name: '',
    email: '',
    password1: '',
    password2: '',
};

export const RegisterPage = () => {
    
    const { formData, onChange, isValidEmail } = useForm<FormProps>( initialForm );

    const onSubmit = ( event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log( formData );
        
    }

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={event => onSubmit( event )}>
            <input 
                type="text"
                name="name"
                placeholder="name"
                value={ formData.name } 
                onChange={ onChange }
                className={`${ formData.name.trim().length <= 0 && 'has-error'}`}/>
                {formData.name.trim().length <= 0 && <span>* Este campo es necesario</span>}
            <input 
                name="email"
                type="text"
                placeholder="email"
                value={ formData.email } 
                onChange={ onChange }
                className={`${ !isValidEmail( formData.email) && 'has-error'}`} />
                {!isValidEmail( formData.email) && <span>* El email es invalido</span>}
            <input 
                name="password1"
                type="password"
                placeholder="password"
                value={ formData.password1 }
                onChange={ onChange } />
                {formData.password1.trim().length <= 0 && <span>* Este campo es necesario</span>}
                {formData.password1.trim().length <= 6 && <span>* La contraseña debe ser mayor a 6 caracteres</span>}

            <input 
                name="password2"
                type="password"
                placeholder="repeat password"
                value={ formData.password2 }
                onChange={ onChange } />
                {formData.password2.trim().length <= 0 && <span>* Este campo es necesario</span>}
                { formData.password2.trim().length > 0 && formData.password2 !== formData.password1 && <span>* Las contraseñas no coinciden</span>}


            <button>Sent Form</button>
            <button>Reset Form</button>
        </form>
    </div>
  )
}
