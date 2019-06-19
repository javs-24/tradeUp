import React from 'react'

export default function CreateAccount({ createAccountToggle, onChange, handleSubmit, firstName, lastName, email, userName, password }) {
  return (
    <div className="createAccount">
      <p>Create Account</p>
      <form onSubmit={handleSubmit}>
        <div className="ca-firstName">
          <label>First Name</label>
          <input name="firstName" value={firstName} onChange={(e) => onChange(e)} placeholder="First Name" type="text"/>
        </div>
        <div className="ca-lastName">
          <label>Last Name</label>
          <input name="lastName" value={lastName} onChange={(e) => onChange(e)} placeholder="Last Name" type="text" />
        </div>
        <div className="ca-email">
          <label> Email </label>
          <input name="email" value={email} onChange={(e) => onChange(e)} placeholder="email" type="email" />
        </div>
        <div className="ca-userName">
          <label>UserName</label>
          <input name="userName" value={userName} onChange={(e) => onChange(e)} placeholder="User Name" type="text" />
        </div>
        <div className="ca-password">
          <label>Password</label>
          <input name="password" value={password} onChange={(e) => onChange(e)} placeholder="Password" type="password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={createAccountToggle}>Already have an account?</button>
    </div>
  )
}
