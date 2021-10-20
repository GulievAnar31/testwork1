import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Form() {
  const [fields, setFields] = React.useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleClickClear = () => {
    setFields({
      firstname: '',
      lastname: '',
      password: '',
      email: '',
    });
  };

  const handleClickRegister = () => {
    if (!fields.email.includes('@')) {
      alert('почта неверная');
      return;
    }
    if (fields.firstname.length < 3 || fields.lastname < 3) {
      alert('Слишком короткое имя');
      return;
    }
    console.log('Зарегистрировались', fields);
    handleClickClear();
  };

  const isValid = !!fields.firstname && !!fields.email && !!fields.lastname && !!fields.password;

  console.log(isValid);

  return (
    <div>
      <div className="row">
        <TextField
          name="firstname"
          onChange={handleChangeInput}
          value={fields.firstname}
          className="inptTxt"
          label="Имя"
          fullWidth
        />
        <TextField
          name="lastname"
          onChange={handleChangeInput}
          value={fields.lastname}
          className="inptTxt"
          label="Фамилия"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          name="email"
          onChange={handleChangeInput}
          value={fields.email}
          className="inptTxt"
          label="E-mail"
          fullWidth
        />
        <TextField
          name="password"
          onChange={handleChangeInput}
          value={fields.password}
          type="password"
          className="inptTxt"
          label="Пароль"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button
          disabled={!isValid}
          onClick={handleClickRegister}
          className="btn"
          variant="contained"
          color="primary">
          Зарегистрироваться
        </Button>
        <Button
          disabled={isValid}
          onClick={handleClickClear}
          className="btn"
          variant="contained"
          color="secondary">
          Очистить
        </Button>
      </div>
    </div>
  );
}
