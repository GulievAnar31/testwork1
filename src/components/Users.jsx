import React from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = React.useState([]);

  async function fetchRes() {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users');
      setUsers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteTwoUsers = () => {
    users.splice(Math.floor(Math.random() * users.length), 2);
    setUsers([...users]);
  };

  React.useEffect(() => {
    fetchRes();
  }, []);

  return (
    <div>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              {item.name} : {item.username}
            </li>
          );
        })}
      </ul>
      <button onClick={handleDeleteTwoUsers}>Удалить двух пользователей</button>
    </div>
  );
}
