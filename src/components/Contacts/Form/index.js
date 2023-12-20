import React, { useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //F5 Block
    e.preventDefault();

    addContact([...contacts, form]);

    // Reset Form
    setForm(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChangeInput}
          name="fullname"
          placeholder="Name"
          value={form.fullname}
          required
        />
      </div>
      <div>
        <input
          onChange={onChangeInput}
          name="phone_number"
          placeholder="Phone"
          value={form.phone_number}
          required
        />
      </div>
      <div>
        <button  id="button-submit" type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
