import {useState} from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const login = (ev) => {
    ev.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={(ev) => login(ev)}>
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
