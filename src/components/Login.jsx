import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  function handleSubmit(e) {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    e.preventDefault();

    console.log(enteredEmail, enteredPassword);
  }

 function handdleInputBlur(identifier) {
    setDidEdit({
      ...didEdit,
      [identifier]: true
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={} ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
