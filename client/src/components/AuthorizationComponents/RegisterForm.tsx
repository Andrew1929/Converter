import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/auth.hook";
import { useDispatch } from "react-redux";
import { closeRegisterModal } from "../../store/modalSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faAt, faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../style/AuthorizationComponentsStyle/RegisterFormStyle.css';

type Inputs = {
    username: string,
    email: string,
    password: string,
};

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const {register ,handleSubmit} = useForm<Inputs>();
    const {request, error} = useAuth();

    const SubmitHandler : SubmitHandler<Inputs> = async data => {
        try {
            await request(
                'http://localhost:5000/register', 
                'POST', 
                {username : data.username, email : data.email, password : data.password}
            )

            if (!error) {
                dispatch(closeRegisterModal())
            }
        } catch (error) {}
    }  

    return (
        <form className="register-form" onSubmit={handleSubmit(SubmitHandler)}>
            <button onClick={() => dispatch(closeRegisterModal())} className="register-form__close-btn">
                <FontAwesomeIcon className="close-btn__icon" icon={faXmark} />
            </button>
            

            <div className="register-form__data-field">
                <FontAwesomeIcon className="data-field__icon" icon={faPenNib} />

                <input className="data-field__input" {...register('username')} required type="text" />

                <label className="data-field__label" htmlFor="">ім'я користувача</label>
            </div>

            <div className="register-form__email-field">
                <FontAwesomeIcon className="email-field__icon" icon={faAt} />

                <input className="data-field__input" {...register('email')} required  type="email" />

                <label className="data-field__label" htmlFor="">електронна пошта</label>
            </div>

            <div className="register-form__data-field">
                <FontAwesomeIcon className="data-field__icon" icon={faLock} />

                <input className="data-field__input" {...register('password')} required  type="password" />

                <label className="data-field__label" htmlFor="">пароль</label>
            </div>

            <button type="submit" className="register-form__submit-btn">Створити</button>
        </form>
    )
}