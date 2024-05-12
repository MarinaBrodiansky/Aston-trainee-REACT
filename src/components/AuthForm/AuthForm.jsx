import { useDispatch } from 'react-redux';
import { createUser, logIn } from '../../store/reducers/userReducer';
import logo from '../../assets/header-logo.svg';
import './AuthForm.css';

const AuthForm = ({ isRegister  }) => {
  const dispatch = useDispatch();

  const hadleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if(isRegister) {
      dispatch(createUser({email, password}));
    } else {
      dispatch(logIn({email, password}));
    }
  }

  return (
    <main>
      <div className='auth__container'>
        <div className='auth__header'>
          <a href='/'><img src={logo} alt='Логотип' className='auth__logo' /></a>
          <h1 className='auth__title'>{ isRegister ? "Регистрация" : "Войти" }</h1>
        </div>
        <form onSubmit={hadleSubmit} className='auth__form form'>
          <label className='auth__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='auth__input'
            type='email'
            id='email'
            name='email'
            placeholder="email"
            required
          />
          <div className='register__error'></div>
          <label className='auth__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='auth__input'
            type='password'
            id='password'
            name='password'
            minLength={6}
            maxLength={200}
            placeholder="Пароль"
            required
          />
          <div className='register__error'></div>
          <button className='auth__button' type='submit'>
            { isRegister ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
        {
          !isRegister && (
            <div className='auth__bottom'>
              <span>Ещё не зарегистрированы?</span>
              <a href='signup' className='auth__link'>
                Регистрация
              </a>
            </div>
          )
        }
      </div>
    </main>
  );
};

export default AuthForm;
