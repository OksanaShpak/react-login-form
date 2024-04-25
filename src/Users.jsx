import { useEffect, useState} from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.email}</span>
            <span>{user.password}</span>
          </li>
        ))}
      </ul>
      <a className="login__link" href="/signup">Sign in</a>
    </div>
  )
}

export default Users;