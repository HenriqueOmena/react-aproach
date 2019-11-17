import React, { useState } from "react";
import { LogInUser } from "../store/auth";
import Connect from "../store/config/connect";

const Login = props => {
  const [name, setName] = useState("");
  const changeNameHandler = ({ target: { value } }) => setName(value);
  const onSubmitHandler = (e) => {
      e.preventDefault()
      props.dispatch(LogInUser(name))
    };
  return (
    <div>
      <form>
        <input
          value={name}
          onChange={changeNameHandler}
          type="text"
          placeholder="Nome"
          className="input"
        />
        <button
          onClick={onSubmitHandler}
          disabled={!name}
          className="btn w-100"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Connect(Login);
