import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    state: 'AP',
    gender: '',
    accept: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");

    setFormData({
      username: '',
      password: '',
      state: 'AP',
      gender: '',
      accept: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <br />
      <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>
      <br />
      <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
      <br />
      <select name="state" value={formData.state} onChange={handleChange}
      >
        <option value="AP">AP</option>
        <option value="TN">TN</option>
        <option value="TG">TG</option>
      </select>
      <br />
      <label>
        <input type="radio" name="gender" value="m" checked={formData.gender === 'm'} onChange={handleChange}/> Male
      </label>
      <label> 
        <input type="radio" name="gender" value="f" checked={formData.gender === 'f'} onChange={handleChange}/> Female
      </label>
      <br /> 
      <label>
        <input type="checkbox" name="accept" checked={formData.accept} onChange={handleChange}/> Contract Acceptance
      </label>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  );
}
