import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Login to your Account</h2>
      <div className="login__inputs">
        <label className="labelBox">
          Email
          <input
            value={email}
            placeholder="mail@abc.com"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
        </label>
        <label className="labelBox">
          Password
          <input
            value={password}
            placeholder="*****************"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
        </label>
      </div>

      <button className="buttonBox">Log in</button>

      <p className="login__text">Not Registered Yet? <a className="login__link" href="/signup">Create an account</a></p>
    </div>
  );
}

export default Login;