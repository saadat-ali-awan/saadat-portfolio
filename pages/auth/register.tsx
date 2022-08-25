import React, { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import path from 'path';

export default function Register() {
  // Create Registration Form
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  // handle form input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // post data to /api/auth/register
    fetch(path.join('api', "auth", "register"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Registration Successful");
      } else {
        console.log("Registration Failed");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">GitHub Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          type="password"
          className="form-control"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Password Confirm"
          value={form.passwordConfirm}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
