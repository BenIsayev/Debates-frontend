import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/user-actions'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const loginHandler = (ev) => {
    ev.preventDefault();
    isSignUp ? dispatch(signup({ username, password })) : dispatch(login({ username, password }));
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={loginHandler}>
        <label htmlFor="username">שם משתמש</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(ev) => setUsername(ev.target.value)}
          value={username}
        />

        <label htmlFor="password">סיסמא</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          value={password}
        />

        <button>{isSignUp ? 'הירשם' : 'היכנס'}</button>
      </form>

      {!isSignUp && (
        <button onClick={() => setIsSignUp(!isSignUp)}>צור חשבון</button>
      )}
      <button onClick={() => login('guest')}>התחל כאורח</button>
    </div>
  );
};

export default LoginPage;
