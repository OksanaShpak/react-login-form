import { useState } from 'react';
import validation from './validation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setPasswordError] = useState({});
  const [emailError, setEmailError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        window.location.href = '/users';
      } else {
        document.querySelector('form').classList.add('error');
      }
    } catch (error) {
      // Handle any network or server errors
    }
  };

  const validation = () => {

    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create an Account</h2>
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
        {errors.map(p)}
      </div>

      <button className="buttonBox" onClick={validation}>Sign up</button>

      <a className="login__link" href="/users">Users</a>

    </form>
  );
};

export default Signup;