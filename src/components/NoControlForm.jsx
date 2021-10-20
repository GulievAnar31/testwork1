import React from 'react';

export default function NoControlForm() {
  const [state, setState] = React.useState([]);
  let email = '';
  let password = '';

  const changeValue = (event) => {
    if (event.target.name === 'Email') {
      email = event.target.value;
      console.log(email);
    } else if (event.target.name === 'Password') {
      password = event.target.value;
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  const changeState = () => {
      let newData = [email, password]
      setState([...state, newData]);  
      console.log(state);
  }

  const items = state.map((item, index) => {
      return <li key = {index}>{item[0]}: {item[1]}</li>
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="Email" type="text" placeholder="E-Mail" onChange={(e) => changeValue(e)} />
        <input
          name="Password"
          type="Password"
          placeholder="Пароль"
          onChange={(e) => changeValue(e)}
        />
        <button onClick={changeState} type="submit">
          Войти
        </button>
      </form>
      <ul>{items}</ul>
    </div>
  );
}
