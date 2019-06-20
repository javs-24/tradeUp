import React from 'react';

export default function Login({
  createAccountToggle,
  onChange,
  handleLoginSubmit,
  userName,
  password
}) {
  return (
    <div className="login-create-acc">
      <p id="login-title">login</p>
      <form autocomplete="off" onSubmit={handleLoginSubmit}>
        <div className="userName">
          <input
            name="userName"
            onChange={e => onChange(e)}
            value={userName}
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="password">
          <input
            name="password"
            onChange={e => onChange(e)}
            value={password}
            placeholder="Password"
            type="password"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={createAccountToggle}>
        u can create an account if u click this button
      </button>
    </div>
  );
}
