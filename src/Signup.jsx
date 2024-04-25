import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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
        {errors.email && <p>{errors.email}</p>}

        <label className="labelBox">
          Password
          <input
            value={password}
            placeholder="*****************"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button className="buttonBox">Sign up</button>

      <a className="login__link" href="/users">Users</a>

    </form>
  );
};

export default Signup;