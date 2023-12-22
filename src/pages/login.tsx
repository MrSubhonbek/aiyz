import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { endPoints, routes } from "../utils/endpoint";
import { ILogin } from "../utils/type";

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setCredentials((state) => ({
      username: e.target.value,
      password: state.password,
    }));

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setCredentials((state) => ({
      username: state.username,
      password: e.target.value,
    }));

  const onSubmit = () => {
    let response;
    fetch(endPoints.Url + endPoints.Login, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((res: ILogin) => {
        response = res;
      });
    localStorage.setItem("user", JSON.stringify(response));
    navigate(routes.Dashboard);
  };

  useEffect(() => {
    localStorage.getItem("user") && navigate(routes.Dashboard);
  });

  return (
    <section id="login">
      <h1>Login</h1>
      <section>
        <article>
          <p>Username: </p>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChangeUsername}
          />
        </article>
        <article>
          <p>Password: </p>
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChangePassword}
          />
        </article>
        <button onClick={onSubmit}>Login</button>
      </section>
    </section>
  );
};
